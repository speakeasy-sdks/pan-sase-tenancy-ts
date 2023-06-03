/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class TenancyGroup {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a tenant service group
     *
     * @remarks
     * Create a tenant service group.
     * The service account used to authenticate this request
     * is granted `msp_superuser` access to the new tenant
     * service group.
     *
     */
    async create(
        req: shared.TenantServiceGroupCreate,
        config?: AxiosRequestConfig
    ): Promise<operations.PostTenancyV1TenantServiceGroupsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.TenantServiceGroupCreate(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/tenancy/v1/tenant_service_groups";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostTenancyV1TenantServiceGroupsResponse =
            new operations.PostTenancyV1TenantServiceGroupsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.tenantServiceGroup = utils.objectToClass(
                        httpRes?.data,
                        shared.TenantServiceGroup
                    );
                }
                break;
            case [400, 401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Delete a tenant service group
     *
     * @remarks
     * Delete a tenant service group. If the TSG ID supplied
     * in this API's path does not match the TSG ID contained in
     * the access token used to authenticate this request, this
     * request will fail.
     *
     */
    async delete(
        tsgId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteTenancyV1TenantServiceGroupsTsgIdResponse> {
        const req = new operations.DeleteTenancyV1TenantServiceGroupsTsgIdRequest({
            tsgId: tsgId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/tenancy/v1/tenant_service_groups/{tsg_id}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteTenancyV1TenantServiceGroupsTsgIdResponse =
            new operations.DeleteTenancyV1TenantServiceGroupsTsgIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.tenantServiceGroup = utils.objectToClass(
                        httpRes?.data,
                        shared.TenantServiceGroup
                    );
                }
                break;
            case [401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Get a tenant service group
     *
     * @remarks
     * Get a tenant service group by TSG ID.
     *
     */
    async get(
        tsgId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTenancyV1TenantServiceGroupsTsgIdResponse> {
        const req = new operations.GetTenancyV1TenantServiceGroupsTsgIdRequest({
            tsgId: tsgId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/tenancy/v1/tenant_service_groups/{tsg_id}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTenancyV1TenantServiceGroupsTsgIdResponse =
            new operations.GetTenancyV1TenantServiceGroupsTsgIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.tenantServiceGroup = utils.objectToClass(
                        httpRes?.data,
                        shared.TenantServiceGroup
                    );
                }
                break;
            case [401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List all tenant service groups
     *
     * @remarks
     * Get a list of all the tenant service groups
     * that are available to the service account used to
     * authenticate this request.
     *
     */
    async list(
        hierarchy?: boolean,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTenancyV1TenantServiceGroupsResponse> {
        const req = new operations.GetTenancyV1TenantServiceGroupsRequest({
            hierarchy: hierarchy,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/tenancy/v1/tenant_service_groups";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTenancyV1TenantServiceGroupsResponse =
            new operations.GetTenancyV1TenantServiceGroupsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getTenancyV1TenantServiceGroups200ApplicationJSONObject =
                        utils.objectToClass(
                            httpRes?.data,
                            operations.GetTenancyV1TenantServiceGroups200ApplicationJSON
                        );
                }
                break;
            case [401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List tenant service group ancestors
     *
     * @remarks
     * List the ancestor tenants of the tenant service group
     * specified in this request. If the TSG ID supplied
     * in this API's path does not match the TSG ID contained in
     * the access token used to authenticate this request, this
     * request will fail.
     *
     */
    async listAncestors(
        tsgId: string,
        fields?: string,
        includeSelf?: boolean,
        sort?: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSort,
        config?: AxiosRequestConfig
    ): Promise<operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse> {
        const req =
            new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsRequest({
                tsgId: tsgId,
                fields: fields,
                includeSelf: includeSelf,
                sort: sort,
            });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/tenancy/v1/tenant_service_groups/{tsg_id}/operations/list_ancestors",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse =
            new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.postTenancyV1TenantServiceGroupsTsgIdOperationsListAncestors200ApplicationJSONObject =
                        utils.objectToClass(
                            httpRes?.data,
                            operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestors200ApplicationJSON
                        );
                }
                break;
            case [401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List tenant service group children
     *
     * @remarks
     * List the child tenants of the tenant service group
     * specified in this request. If the TSG ID supplied
     * in this API's path does not match the TSG ID contained in
     * the access token used to authenticate this request, this
     * request will fail.
     *
     */
    async listChildren(
        tsgId: string,
        hierarchy?: boolean,
        includeSelf?: boolean,
        config?: AxiosRequestConfig
    ): Promise<operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse> {
        const req =
            new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenRequest({
                tsgId: tsgId,
                hierarchy: hierarchy,
                includeSelf: includeSelf,
            });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/tenancy/v1/tenant_service_groups/{tsg_id}/operations/list_children",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse =
            new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.postTenancyV1TenantServiceGroupsTsgIdOperationsListChildren200ApplicationJSONObject =
                        utils.objectToClass(
                            httpRes?.data,
                            operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildren200ApplicationJSON
                        );
                }
                break;
            case [401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Update a tenant service group
     *
     * @remarks
     * Update a tenant service group. If the TSG ID supplied
     * in this API's path does not match the TSG ID contained in
     * the access token used to authenticate this request, this
     * request will fail.
     *
     */
    async update(
        tenantServiceGroupUpdate: shared.TenantServiceGroupUpdate,
        tsgId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.PutTenancyV1TenantServiceGroupsTsgIdResponse> {
        const req = new operations.PutTenancyV1TenantServiceGroupsTsgIdRequest({
            tenantServiceGroupUpdate: tenantServiceGroupUpdate,
            tsgId: tsgId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/tenancy/v1/tenant_service_groups/{tsg_id}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "tenantServiceGroupUpdate",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutTenancyV1TenantServiceGroupsTsgIdResponse =
            new operations.PutTenancyV1TenantServiceGroupsTsgIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.tenantServiceGroup = utils.objectToClass(
                        httpRes?.data,
                        shared.TenantServiceGroup
                    );
                }
                break;
            case [401, 403, 404, 500].includes(httpRes?.status):
                break;
        }

        return res;
    }
}
