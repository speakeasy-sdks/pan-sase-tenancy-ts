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

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.create({
  displayName: "Example TSG",
  parentId: "1378242802",
  supportContact: "user@example.com",
  vertical: TenantServiceGroupCreateVertical.HighTech,
}).then((res: PostTenancyV1TenantServiceGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.TenantServiceGroupCreate](../../models/shared/tenantservicegroupcreate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostTenancyV1TenantServiceGroupsResponse](../../models/operations/posttenancyv1tenantservicegroupsresponse.md)>**


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

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.delete("1378242802").then((res: DeleteTenancyV1TenantServiceGroupsTsgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tsgId`                                                      | *string*                                                     | :heavy_check_mark:                                           | A unique identifier for the tenant service group.<br/>       | 1378242802                                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteTenancyV1TenantServiceGroupsTsgIdResponse](../../models/operations/deletetenancyv1tenantservicegroupstsgidresponse.md)>**


## get

Get a tenant service group by TSG ID.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { GetTenancyV1TenantServiceGroupsTsgIdResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.get("1378242802").then((res: GetTenancyV1TenantServiceGroupsTsgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tsgId`                                                      | *string*                                                     | :heavy_check_mark:                                           | A unique identifier for the tenant service group.<br/>       | 1378242802                                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetTenancyV1TenantServiceGroupsTsgIdResponse](../../models/operations/gettenancyv1tenantservicegroupstsgidresponse.md)>**


## list

Get a list of all the tenant service groups
that are available to the service account used to
authenticate this request.


### Example Usage

```typescript
import { SaseTenancy } from "sase-tenancy";
import { GetTenancyV1TenantServiceGroupsResponse } from "sase-tenancy/dist/sdk/models/operations";
import { TenantServiceGroupVertical } from "sase-tenancy/dist/sdk/models/shared";

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.list(false).then((res: GetTenancyV1TenantServiceGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hierarchy`                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                              | Indicates whether the response structure lists groups in<br/>their hierarchy, or as an array of TSGs without regard to<br/>hierarchy. Default is false (don't show hierarchy).<br/><br/>If false, the order of the TSGs in the result array is not<br/>guaranteed.<br/> |
| `config`                                                                                                                                                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                              | Available config options for making requests.                                                                                                                                                                                                   |


### Response

**Promise<[operations.GetTenancyV1TenantServiceGroupsResponse](../../models/operations/gettenancyv1tenantservicegroupsresponse.md)>**


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

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.listAncestors("1378242802", "corrupti", false, PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSort.Desc).then((res: PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tsgId`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | A unique identifier for the tenant service group.<br/>                                                                                                                     | 1378242802                                                                                                                                                                 |
| `fields`                                                                                                                                                                   | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | Provide a comma-separated list of fields you want returned.<br/>                                                                                                           |                                                                                                                                                                            |
| `includeSelf`                                                                                                                                                              | *boolean*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                         | Indicates if the TSG used to generate this hierarchy is<br/>included in the resulting TSG list. `true` to include<br/>self. Default is `false`.<br/>                       |                                                                                                                                                                            |
| `sort`                                                                                                                                                                     | [operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSort](../../models/operations/posttenancyv1tenantservicegroupstsgidoperationslistancestorssort.md) | :heavy_minus_sign:                                                                                                                                                         | Identifies the response structure's sort order:<br/><br/>* `asc` : From root to leaf.<br/>* `desc` : From leaf to root.<br/>                                               |                                                                                                                                                                            |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |                                                                                                                                                                            |


### Response

**Promise<[operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse](../../models/operations/posttenancyv1tenantservicegroupstsgidoperationslistancestorsresponse.md)>**


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

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.listChildren("1378242802", false, false).then((res: PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                         | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tsgId`                                                                                                                                                           | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | A unique identifier for the tenant service group.<br/>                                                                                                            | 1378242802                                                                                                                                                        |
| `hierarchy`                                                                                                                                                       | *boolean*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                | If `true`, return the entire descendent hierarchy.<br/>If `false`, return only the immediate children of the<br/>TSG identified in this call's path. Default is<br/>`false`.<br/> |                                                                                                                                                                   |
| `includeSelf`                                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                | Indicates if the TSG used to generate this hierarchy is<br/>included in the resulting TSG list. `true` to include<br/>self. Default is `false`.<br/>              |                                                                                                                                                                   |
| `config`                                                                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                      | :heavy_minus_sign:                                                                                                                                                | Available config options for making requests.                                                                                                                     |                                                                                                                                                                   |


### Response

**Promise<[operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse](../../models/operations/posttenancyv1tenantservicegroupstsgidoperationslistchildrenresponse.md)>**


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

const sdk = new SaseTenancy({
  security: {
    bearer: "",
  },
});

sdk.tenancyGroup.update({
  displayName: "Example TSG",
  supportContact: "user@example.com",
  vertical: TenantServiceGroupUpdateVertical.HighTech,
}, "1378242802").then((res: PutTenancyV1TenantServiceGroupsTsgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `tenantServiceGroupUpdate`                                                         | [shared.TenantServiceGroupUpdate](../../models/shared/tenantservicegroupupdate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `tsgId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | A unique identifier for the tenant service group.<br/>                             | 1378242802                                                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |                                                                                    |


### Response

**Promise<[operations.PutTenancyV1TenantServiceGroupsTsgIdResponse](../../models/operations/puttenancyv1tenantservicegroupstsgidresponse.md)>**

