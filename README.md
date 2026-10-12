# DT Delivery SDK

Prebuilt browser SDK for chunked digital twin publications, stable Actor IDs and SDK 5 addons. MIT licensed. The repository contains the SDK and an integration example. Model files, addon installations, editor files and credentials are delivered separately.

## Install from Git

Replace OWNER/REPOSITORY with the public repository you created and choose an existing release tag:

```sh
pnpm add "https://github.com/OWNER/REPOSITORY.git#v0.2.1"
```

The repository root is an installable package. Installation does not compile the editor or run a prepare script. Commit your application package.json and pnpm-lock.yaml. For reproducible deployments pin a release tag or commit and run `pnpm install --frozen-lockfile`.

## Open a publication

```ts
import { DeliveryApiClient, ChunkReader, DeliveryViewer } from '@dt/delivery-sdk';
import '@dt/delivery-sdk/viewport.css';

// Values come from your authenticated host, not the SDK repository.
const api = new DeliveryApiClient(new URL(apiURL), async () => authorizationHeader);
const listing = await api.compositions(scope);
const model = listing.items.find(item => item.id === compositionId);
if (!model) throw new Error('Publication not found; check catalog, scope and pagination');
const viewer = new DeliveryViewer(canvas, new ChunkReader(api.provider(scope, model.id, model.releaseHash)));
await viewer.open(model.releaseHash);
// Screen close/logout: await viewer.dispose();
```

Give the canvas and its parent a nonzero size. The SDK is for browsers or a desktop application's WebView; Python/C# can call the host HTTP API. The host implements authentication, allowed origins, publication catalog and storage access. S3 upload keys belong on the server/editor, never in this repository or browser code.

See [API](docs/API.md), [GitHub Desktop publishing](docs/GITHUB_DESKTOP.md), [updates](docs/UPDATING.md) and [browser example](examples/web/README.md). The package's sdk-manifest.json records version, contracts and file hashes. Its bundled third-party notices remain in THIRD_PARTY_LICENSES.txt.
