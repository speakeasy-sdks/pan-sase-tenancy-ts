/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  bearer: string;
}

export class PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenRequest extends SpeakeasyBase {
  /**
   * If `true`, return the entire descendent hierarchy.
   *
   * @remarks
   * If `false`, return only the immediate children of the
   * TSG identified in this call's path. Default is
   * `false`.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=hierarchy",
  })
  hierarchy?: boolean;

  /**
   * Indicates if the TSG used to generate this hierarchy is
   *
   * @remarks
   * included in the resulting TSG list. `true` to include
   * self. Default is `false`.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include_self",
  })
  includeSelf?: boolean;

  /**
   * A unique identifier for the tenant service group.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=tsg_id",
  })
  tsgId: string;
}

/**
 * Successful response.
 */
export class PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildren200ApplicationJSON extends SpeakeasyBase {
  /**
   * Total count of the items
   */
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count: number;

  @SpeakeasyMetadata({ elemType: shared.TenantServiceGroup })
  @Expose({ name: "items" })
  @Type(() => shared.TenantServiceGroup)
  items: shared.TenantServiceGroup[];
}

export class PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful response.
   */
  @SpeakeasyMetadata()
  postTenancyV1TenantServiceGroupsTsgIdOperationsListChildren200ApplicationJSONObject?: PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildren200ApplicationJSON;
}
