/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTenancyV1TenantServiceGroupsTsgIdRequest extends SpeakeasyBase {
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

export class GetTenancyV1TenantServiceGroupsTsgIdResponse extends SpeakeasyBase {
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
  tenantServiceGroup?: shared.TenantServiceGroup;
}
