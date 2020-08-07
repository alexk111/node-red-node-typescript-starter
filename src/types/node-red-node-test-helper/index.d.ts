declare module "node-red-node-test-helper" {
  import { Node, NodeDef, NodeInitializer, NodeCredentials } from "node-red";
  import { LocalSettings } from "@node-red/runtime";
  import { SinonSpy } from "sinon";
  import supertest from "supertest";

  export function init(
    nodeRedRuntime: string,
    userSettings?: LocalSettings
  ): void;

  export type TestNode = NodeInitializer | NodeInitializer[];
  export type TestFlowsItem = Partial<NodeDef> & Pick<NodeDef, "id" | "type">;
  export type TestFlows = Array<TestFlowsItem>;
  export type TestCredentials<TCred> = NodeCredentials<TCred>;

  /**
   * Loads a flow then starts the flow.
   * @param testNode Module object of a node to be tested returned by require function.
   * This node will be registered, and can be used in testFlows.
   * @param testFlows Flow data to test a node. If you want to use flow data exported
   * from Node-RED editor, export the flow to the clipboard and paste the content into
   * your test scripts.
   * @param testCredentials Optional node credentials.
   * @param cb Function to call back when testFlows has been started.
   */
  export function load<TCred>(
    testNode: TestNode,
    testFlows: TestFlows,
    testCredentials?: TestCredentials<TCred>,
    cb?: () => void
  ): Promise<void>;

  /**
   * Returns promise to stop all flows, clean up test runtime.
   */
  export function unload(): Promise<void>;

  /**
   * Returns a node instance by id in the testFlow. Any node that is defined in testFlows
   * can be retrieved, including any helper node added to the flow.
   * @param id Node id
   */
  export function getNode(id: string): Node;

  /**
   * Stop all flows.
   */
  export function clearFlows(): Promise<void>;

  /**
   * Create http (supertest) request to the editor/admin url.
   * @example
   * ```
   * helper.request().post('/inject/invalid').expect(404).end(done);
   * ```
   */
  export function request(): supertest.SuperTest<supertest.Test>;

  /**
   * Merges any userSettings with the defaults returned by `RED.settings`. Each
   * invocation of this method will overwrite the previous userSettings to prevent
   * unexpected problems in your tests.
   *
   * This will enable you to replicate your production environment within your tests,
   * for example where you're using the `functionGlobalContext` to enable extra node
   * modules within your functions.
   * @example
   * ```
   * // functions can now access os via global.get('os')
   * helper.settings({ functionGlobalContext: { os:require('os') } });
   *
   * // reset back to defaults
   * helper.settings({ });
   * ```
   * @param userSettings - an object containing the runtime settings
   * @returns custom userSettings merged with default RED.settings
   */
  export function settings(userSettings: Partial<LocalSettings>): LocalSettings;

  /**
   * Starts a Node-RED server for testing nodes that depend on http or web sockets endpoints
   * like the debug node. To start a Node-RED server before all test cases:
   * ```
   * before((done) => {
   *     helper.startServer(done);
   * });
   * ```
   * @param done callback
   */
  export function startServer(done?: () => void): void;

  /**
   * Stop server. Generally called after unload() complete. For example, to unload a flow then
   * stop a server after each test:
   * ```
   * afterEach((done) => {
   *     helper.unload().then(() => {
   *         helper.stopServer(done);
   *     });
   * });
   * ```
   * @param done callback
   */
  export function stopServer(done?: () => void): void;

  /**
   * Return the URL of the helper server including the ephemeral port used when starting the server.
   */
  export function url(): string;

  /**
   * Return a spy on the logs to look for events from the node under test. For example:
   * ```
   * const logEvents = helper.log().args.filter((evt) => {
   *     return evt[0].type === "batch";
   * });
   * ```
   */
  export function log(): SinonSpy;
}
