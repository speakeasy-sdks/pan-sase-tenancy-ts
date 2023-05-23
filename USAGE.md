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