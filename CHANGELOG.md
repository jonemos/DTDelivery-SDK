# Changelog

## 0.3.14

Publish the current chunk and loading runtime with a shared 512px texture-display ceiling and current recipe declarations. Preserve verified source identities, geometry/material references, alpha handling and direct storage connections. Refresh the README for the current no-install viewer, display controls, optional spatial streaming, public API and update workflow.

## 0.3.13

Publish the current runtime and declarations for validated PBR/UV bake recipes and partial-import metadata. Preserve the existing public client API, direct storage connections and immutable chunk checks. Rewrite the README as a current usage guide with the actual automatic connection flow, page controls, update steps and typed quick start.

## 0.3.12

Import every Unreal material as standard PBR with six outputs; preserve baked mask and translucent opacity, including alpha when color maps are off. Exclude refraction, WPO and extra shading effects without changing sources.

## 0.3.11

Remove the unused developer launcher; examples/test-server.cmd remains the no-install entry point. Update existing SDKs safely, including removal of the old launcher while retaining personal data, backups and Git history. Rewrite the README around the current automatic storage/model connection workflow and refresh the example instructions. Preserve verified chunk reads, model-name discovery, automatic release updates, Actor selection and all existing immutable tags.

## 0.3.10

Bundle the current public storage connection so first launch needs no address or model ID handoff. DeliveryClient accepts canvas alone. Discover model names automatically, refresh newly published model identities every ten seconds and remember the selected model; explicit disconnect disables default reconnection. Automatically register successful publications with conditional catalog updates and recover incomplete registration without replaying head CAS. Include the existing published model as a read-only bootstrap identity, without modifying storage. Preserve verified heads, shared chunks, five-second release refresh, camera settings, one-click updates and the no-install server.

## 0.3.9

Automatically refresh an opened model from the latest publication head every five seconds. Verify and stage replacements atomically, preserve camera and display settings, retain the previous scene on failure and retry with bounded backoff. Add lightweight source head checks, autoUpdate configuration and progress.update status; isolate release providers and stop polling on cancel/dispose. Preserve remote storage prefixes, shared chunk cache, one-click updater and no-install test server.

## 0.3.8

Fix update.cmd Git rev-parse failures for administrator-owned or copied SDK folders. Trust only the validated SDK path for each updater Git process without changing global Git configuration. Preserve local edits, backup/recovery, existing history and tags, remote publication support, and the no-install test server.

## 0.3.7

Support HttpChunkSource(base, { scope, compositionId }) for read-only remote publication heads and shared levels objects/releases under a bucket prefix. Add a remote-publication mode to the no-install example with explicit identity and CORS/read-permission guidance. Preserve plain exports, hash/identity validation, anonymous GET-only browser access, viewport behavior and immutable history.

## 0.3.6

Preserve committed personal files by refusing Git SDK checkouts with tracked paths outside the SDK manifest before checkout. Reject redirected Git directories. Retain verified no-install ZIP/Git updates, recoverable backups and the prebuilt PowerShell test server.

## 0.3.5

Add update.cmd for verified one-click updates of ZIP and Git SDK copies without Node.js or pnpm. Pin official main to one commit, preserve user files and Git history, keep verified backups and recover interrupted updates. Keep the prebuilt PowerShell test server and block updates while it is running.

## 0.3.4

Run the prebuilt browser example with built-in Windows PowerShell. No Node.js, pnpm, package installation or startup download is required. Validate exact public runtime/page hashes before serving loopback-only GET/HEAD files. Preserve source development in dev-server.cmd, the shared public SDK entry, existing data contracts and all immutable version tags.

## 0.3.3

Add21 runnable feature examples, actual source-code viewing/copy, parameter and result panels, prerequisite guards, cancellation and view restoration. Preserve viewport rendering and menus, immutable IDs, direct sources, all contracts and previous tags.

## 0.3.2

Compact the example page into a logo/status row and one connection/model action row. Improve Actor search cards, selected details, cell-state labels and script-property readability. Increase viewport space by reducing header/panel chrome. Preserve viewport source, controls and runtime rendering; maintain the original host defaults inside the viewport. Keep existing direct sources, immutable chunks, Actor identities and all prior version tags.

## 0.3.1

Match standalone viewport popup controls to the composition editor's compact styles and isolate them from host page forms. Remove icon and icon-size controls from Show, rename editor helpers consistently, and add real Actor world bounds with helper-layer isolation and cleanup on hide/unload/toggle/dispose. Keep direct local/static HTTP sources, chunk contracts 1-5, Atlas, stable Actor identity and static batching off by default.

## 0.3.0

Breaking public SDK change: use DeliveryClient with LocalChunkSource or HttpChunkSource instead of the query API server, CLI and HTTP control clients. Add session/code/revision-bound script property handles. Keep chunk contracts 1-5, Atlas profiles, progressive loading, stable Actor identity and static batching off by default. Rewrite the README with version-pinned Git installation, read-only local chunk connection, editor full/delta export instructions and an actual-model acceptance sequence. The example runs one static test page server. Authenticated S3 discovery and persistent/shared property storage remain host responsibilities.

## 0.2.23

Support SmartCube and shared UPB Atlas v3/v4 materials.

Preserve automatic color counts, valid-ID/preview fallback, enabled kinds and original Painter RGB/PBR inputs. Allow the registered profiles in frozen Player/delivery packages while retaining rejection of unsupported profiles.

Keep progressive loading, stable Actor selection, exact cell reentry draw order and experimental static batching disabled by default. Existing Atlas v1/v2 and publication contracts remain supported. New material data requires chunks rebuilt with the updated editor.

## 0.2.22

Refresh the local SDK dependency graph when launching the example, including existing lockfiles. Keep pinned React declarations, copied dependencies, exact cell reentry draw ranks, progressive loading, original Actor selection and experimental batching disabled by default. Retain all existing immutable tags.

## 0.2.21

Include pinned React declarations for standalone public viewport UI types. Use copied example dependencies so SDK updates retain the hardlink protection. Preserve stable cell reentry draw ranks, progressive loading, original Actor selection and experimental batching disabled by default. Retain all existing immutable tags.

## 0.2.20

Preserve immutable cell reentry pixels by stable opaque draw ranks instead of reallocated material/object IDs. Keep progressive loading, original Actor selection, compact viewport controls and experimental batching disabled by default. Verified actual model three unload/reentry cycles with exact pixels and stable Actor picks.

## 0.2.16

16

## 0.2.14

Retain automatically supplied token provenance after scope edits, so changing the API address clears that token before any request can send it to another host. Keep same-PC local/remote automatic settings, download/preparation progress, cancellation and error handling; preserve API authorization/catalog/hash validation and all existing tags.

## 0.2.13

Automatically fill same-PC example connection settings and API tokens for local and remote configurations. Show actual download and preparation progress, loading cancellation and immediate failures. Reuse bounded immutable release parsing and membership indexes while rechecking current authorization, catalog grants and stored release hashes on every API request.

## 0.2.12

Stop generating and publishing equipment sidecar files. Verify local and remote chunk closures without equipment files, omit equipment.json from portable readable output, preserve existing source metadata/releases and legacy SDK read APIs, and document the current folder structure and upgrade order.

## 0.2.11

Restyle the example with a compact dark top toolbar, grouped API/model controls, a mint primary action, keyboard-accessible collapsible startup help and responsive layouts. Preserve local/remote connection behavior and server configuration.

## 0.2.10

Add local-folder and remote-storage selection to the shipped web example. Supply the loopback API/scope defaults and matching launcher/token guidance, validate connection inputs, clear old connections on setting changes and ignore stale asynchronous responses. Align both beginner setup paths.

## 0.2.9

Rewrite the beginner README into complete local-folder and remote-storage setup paths. Clarify folder selection, prepared remote configuration, API tokens, test-page startup, project integration and model updates. Align example navigation; preserve SDK/API behavior.

## 0.2.8

Support ordinary local chunk export folders directly without publisher receipts. Fully validate the head, chunks, reconstructed files and level metadata before API catalog registration; keep source files read-only and apply saved changes on API restart. Preserve existing publication-store and remote workflows.

## 0.2.7

Add Windows API launchers: local folder input only and remote startup from the root delivery-api.config.json without prompts or credential changes. Include public configuration files and a test-page launcher that installs dependencies, starts the server and opens the browser.

## 0.2.6

Reuse local connections for the same folder and scope. Add safe connection removal and persistent job-history cleanup; preserve immutable profile IDs, source journals and published receipts.

## 0.2.5

Validate and reflect remote publications once at API startup. Configure composition IDs once; restart after republishing without a new job JSON. No periodic monitoring; preserve previous verified releases on failure.

## 0.2.4

Fix registration prerequisites and missing completed-job diagnostics; document actual editor JSON download and remote/local execution order.

## 0.2.3

한국어 README·API 실행 안내와 서버 포함 SDK 배포

## 0.2.2

init

## 0.2.1

Public prebuilt SDK, strict portable API declarations, MIT license and Git installation guide.
