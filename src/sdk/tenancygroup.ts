/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class TenancyGroup {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
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
    security: operations.PostTenancyV1TenantServiceGroupsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTenancyV1TenantServiceGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.TenantServiceGroupCreate(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/tenancy/v1/tenant_service_groups";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.PostTenancyV1TenantServiceGroupsSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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
    req: operations.DeleteTenancyV1TenantServiceGroupsTsgIdRequest,
    security: operations.DeleteTenancyV1TenantServiceGroupsTsgIdSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTenancyV1TenantServiceGroupsTsgIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTenancyV1TenantServiceGroupsTsgIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/tenancy/v1/tenant_service_groups/{tsg_id}",
      req
    );

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DeleteTenancyV1TenantServiceGroupsTsgIdSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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
    req: operations.GetTenancyV1TenantServiceGroupsTsgIdRequest,
    security: operations.GetTenancyV1TenantServiceGroupsTsgIdSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTenancyV1TenantServiceGroupsTsgIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTenancyV1TenantServiceGroupsTsgIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/tenancy/v1/tenant_service_groups/{tsg_id}",
      req
    );

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetTenancyV1TenantServiceGroupsTsgIdSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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
    req: operations.GetTenancyV1TenantServiceGroupsRequest,
    security: operations.GetTenancyV1TenantServiceGroupsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTenancyV1TenantServiceGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTenancyV1TenantServiceGroupsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/tenancy/v1/tenant_service_groups";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetTenancyV1TenantServiceGroupsSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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
    req: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsRequest,
    security: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/tenancy/v1/tenant_service_groups/{tsg_id}/operations/list_ancestors",
      req
    );

    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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
      new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListAncestorsResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
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
    req: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenRequest,
    security: operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/tenancy/v1/tenant_service_groups/{tsg_id}/operations/list_children",
      req
    );

    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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
      new operations.PostTenancyV1TenantServiceGroupsTsgIdOperationsListChildrenResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
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
    req: operations.PutTenancyV1TenantServiceGroupsTsgIdRequest,
    security: operations.PutTenancyV1TenantServiceGroupsTsgIdSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTenancyV1TenantServiceGroupsTsgIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTenancyV1TenantServiceGroupsTsgIdRequest(req);
    }

    const baseURL: string = this._serverURL;
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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.PutTenancyV1TenantServiceGroupsTsgIdSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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