# tenancyGroup

### Available Operations

* [create](#create) - Create a tenant service group
* [delete](#delete) - Delete a tenant service group
* [get](#get) - Get a tenant service group
* [list](#list) - List all tenant service groups
* [listAncestors](#listancestors) - List tenant service group ancestors
* [listChildren](#listchildren) - List tenant service group children
* [update](#update) - Update a tenant service group

## create

Create a tenant service group.
The service account used to authenticate this request
is granted `msp_superuser` access to the new tenant
service group.


### Example Usage

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

## delete

Delete a tenant service group. If the TSG ID supplied
in this API's path does not match the TSG ID contained in
the access token used to authenticate this request, this
request will fail.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { DeleteTenancyV1TenantServiceGroupsTsgIdResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.delete({
  tsgId: "1378242802",
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteTenancyV1TenantServiceGroupsTsgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get a tenant service group by TSG ID.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { GetTenancyV1TenantServiceGroupsTsgIdResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.get({
  tsgId: "1378242802",
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetTenancyV1TenantServiceGroupsTsgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of all the tenant service groups
that are available to the service account used to
authenticate this request.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { GetTenancyV1TenantServiceGroupsResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.list({
  hierarchy: false,
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetTenancyV1TenantServiceGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAncestors

List the ancestor tenants of the tenant service group
specified in this request. If the TSG ID supplied
in this API's path does not match the TSG ID contained in
the access token used to authenticate this request, this
request will fail.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import {
  PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse,
  PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSort,
} from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.listAncestors({
  fields: "corrupti",
  includeSelf: false,
  sort: PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSort.Desc,
  tsgId: "1378242802",
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listChildren

List the child tenants of the tenant service group
specified in this request. If the TSG ID supplied
in this API's path does not match the TSG ID contained in
the access token used to authenticate this request, this
request will fail.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.listChildren({
  hierarchy: false,
  includeSelf: false,
  tsgId: "1378242802",
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update a tenant service group. If the TSG ID supplied 
in this API's path does not match the TSG ID contained in
the access token used to authenticate this request, this 
request will fail.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { PutTenancyV1TenantServiceGroupsTsgIdResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupUpdateVertical, TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy();

sdk.tenancyGroup.update({
  tenantServiceGroupUpdate: {
    displayName: "Example TSG",
    supportContact: "user@example.com",
    vertical: TenantServiceGroupUpdateVertical.HighTech,
  },
  tsgId: "1378242802",
}, {
  bearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: PutTenancyV1TenantServiceGroupsTsgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
