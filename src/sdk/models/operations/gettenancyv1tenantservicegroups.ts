/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTenancyV1TenantServiceGroupsRequest extends SpeakeasyBase {
    /**
     * Indicates whether the response structure lists groups in
     *
     * @remarks
     * their hierarchy, or as an array of TSGs without regard to
     * hierarchy. Default is false (don't show hierarchy).
     *
     * If false, the order of the TSGs in the result array is not
     * guaranteed.
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hierarchy" })
    hierarchy?: boolean;
}

/**
 * Successful response.
 */
export class GetTenancyV1TenantServiceGroups200ApplicationJSON extends SpeakeasyBase {
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

export class GetTenancyV1TenantServiceGroupsResponse extends SpeakeasyBase {
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
    getTenancyV1TenantServiceGroups200ApplicationJSONObject?: GetTenancyV1TenantServiceGroups200ApplicationJSON;
}
