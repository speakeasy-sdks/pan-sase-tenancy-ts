<div align="center">
    <img src="https://github.com/speakeasy-sdks/pan-sase-tenancy-ts/assets/6267663/e0205c2a-fa61-4b1f-aaa0-599896e022da" width="300">
    <h1>SASE Tenancy Typesript SDK</h1>
   <p>Fully managed serverless PostgreSQL</p>
   <a href="https://docs.paloaltonetworks.com/pan-os/9-1/pan-os-panorama-api/get-started-with-the-pan-os-rest-api/access-the-rest-api"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/pan-sase-tenancy-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/pan-sase-tenancy-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/pan-sase-tenancy-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/pan-sase-tenancy-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/pan-sase-tenancy-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/pan-sase-tenancy-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SaseTenancy } from "sase-tenancy";
import { PostTenancyV1TenantServiceGroupsResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupCreateVertical, TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.create({
  displayName: "Example TSG",
  parentId: "1378242802",
  supportContact: "user@example.com",
  vertical: TenantServiceGroupCreateVertical.HighTech,
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: PostTenancyV1TenantServiceGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [tenancyGroup](docs/tenancygroup/README.md)

* [create](docs/tenancygroup/README.md#create) - Create a tenant service group
* [delete](docs/tenancygroup/README.md#delete) - Delete a tenant service group
* [get](docs/tenancygroup/README.md#get) - Get a tenant service group
* [list](docs/tenancygroup/README.md#list) - List all tenant service groups
* [listAncestors](docs/tenancygroup/README.md#listancestors) - List tenant service group ancestors
* [listChildren](docs/tenancygroup/README.md#listchildren) - List tenant service group children
* [update](docs/tenancygroup/README.md#update) - Update a tenant service group
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

