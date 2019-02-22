// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {RestApi} from "./restApi";

/**
 * Provides a HTTP Method for an API Gateway Resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const myDemoAPI = new aws.apigateway.RestApi("MyDemoAPI", {
 *     description: "This is my API for demonstration purposes",
 * });
 * const myDemoResource = new aws.apigateway.Resource("MyDemoResource", {
 *     parentId: myDemoAPI.rootResourceId,
 *     pathPart: "mydemoresource",
 *     restApi: myDemoAPI.id,
 * });
 * const myDemoMethod = new aws.apigateway.Method("MyDemoMethod", {
 *     authorization: "NONE",
 *     httpMethod: "GET",
 *     resourceId: myDemoResource.id,
 *     restApi: myDemoAPI.id,
 * });
 * ```
 * 
 * ## Usage with Cognito User Pool Authorizer
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const config = new pulumi.Config();
 * const cognitoUserPoolName = config.require("cognitoUserPoolName");
 * 
 * const thisRestApi = new aws.apigateway.RestApi("this", {});
 * const thisUserPools = pulumi.output(aws.cognito.getUserPools({
 *     name: cognitoUserPoolName,
 * }));
 * const thisAuthorizer = new aws.apigateway.Authorizer("this", {
 *     providerArns: thisUserPools.apply(thisUserPools => thisUserPools.arns),
 *     restApi: thisRestApi.id,
 *     type: "COGNITO_USER_POOLS",
 * });
 * const thisResource = new aws.apigateway.Resource("this", {
 *     parentId: thisRestApi.rootResourceId,
 *     pathPart: "{proxy+}",
 *     restApi: thisRestApi.id,
 * });
 * const any = new aws.apigateway.Method("any", {
 *     authorization: "COGNITO_USER_POOLS",
 *     authorizerId: thisAuthorizer.id,
 *     httpMethod: "ANY",
 *     requestParameters: {
 *         "method.request.path.proxy": true,
 *     },
 *     resourceId: thisResource.id,
 *     restApi: thisRestApi.id,
 * });
 * ```
 */
export class Method extends pulumi.CustomResource {
    /**
     * Get an existing Method resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MethodState, opts?: pulumi.CustomResourceOptions): Method {
        return new Method(name, <any>state, { ...opts, id: id });
    }

    /**
     * Specify if the method requires an API key
     */
    public readonly apiKeyRequired: pulumi.Output<boolean | undefined>;
    /**
     * The type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)
     */
    public readonly authorization: pulumi.Output<string>;
    /**
     * The authorization scopes used when the authorization is `COGNITO_USER_POOLS`
     */
    public readonly authorizationScopes: pulumi.Output<string[] | undefined>;
    /**
     * The authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`
     */
    public readonly authorizerId: pulumi.Output<string | undefined>;
    /**
     * The HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`)
     */
    public readonly httpMethod: pulumi.Output<string>;
    /**
     * A map of the API models used for the request's content type
     * where key is the content type (e.g. `application/json`)
     * and value is either `Error`, `Empty` (built-in models) or `aws_api_gateway_model`'s `name`.
     */
    public readonly requestModels: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of request query string parameters and headers that should be passed to the integration.
     * For example:
     * ```typescript
     * import * as pulumi from "@pulumi/pulumi";
     * ```
     * would define that the header `X-Some-Header` and the query string `some-query-param` must be provided on the request, or
     */
    public readonly requestParameters: pulumi.Output<{[key: string]: boolean} | undefined>;
    /**
     * **Deprecated**, use `request_parameters` instead.
     */
    public readonly requestParametersInJson: pulumi.Output<string | undefined>;
    /**
     * The ID of a `aws_api_gateway_request_validator`
     */
    public readonly requestValidatorId: pulumi.Output<string | undefined>;
    /**
     * The API resource ID
     */
    public readonly resourceId: pulumi.Output<string>;
    /**
     * The ID of the associated REST API
     */
    public readonly restApi: pulumi.Output<RestApi>;

    /**
     * Create a Method resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<MethodArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<MethodArgs> | pulumi.InputObject<MethodState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MethodState = argsOrState as MethodState | undefined;
            inputs["apiKeyRequired"] = state ? state.apiKeyRequired : undefined;
            inputs["authorization"] = state ? state.authorization : undefined;
            inputs["authorizationScopes"] = state ? state.authorizationScopes : undefined;
            inputs["authorizerId"] = state ? state.authorizerId : undefined;
            inputs["httpMethod"] = state ? state.httpMethod : undefined;
            inputs["requestModels"] = state ? state.requestModels : undefined;
            inputs["requestParameters"] = state ? state.requestParameters : undefined;
            inputs["requestParametersInJson"] = state ? state.requestParametersInJson : undefined;
            inputs["requestValidatorId"] = state ? state.requestValidatorId : undefined;
            inputs["resourceId"] = state ? state.resourceId : undefined;
            inputs["restApi"] = state ? state.restApi : undefined;
        } else {
            const args = argsOrState as MethodArgs | undefined;
            if (!args || args.authorization === undefined) {
                throw new Error("Missing required property 'authorization'");
            }
            if (!args || args.httpMethod === undefined) {
                throw new Error("Missing required property 'httpMethod'");
            }
            if (!args || args.resourceId === undefined) {
                throw new Error("Missing required property 'resourceId'");
            }
            if (!args || args.restApi === undefined) {
                throw new Error("Missing required property 'restApi'");
            }
            inputs["apiKeyRequired"] = args ? args.apiKeyRequired : undefined;
            inputs["authorization"] = args ? args.authorization : undefined;
            inputs["authorizationScopes"] = args ? args.authorizationScopes : undefined;
            inputs["authorizerId"] = args ? args.authorizerId : undefined;
            inputs["httpMethod"] = args ? args.httpMethod : undefined;
            inputs["requestModels"] = args ? args.requestModels : undefined;
            inputs["requestParameters"] = args ? args.requestParameters : undefined;
            inputs["requestParametersInJson"] = args ? args.requestParametersInJson : undefined;
            inputs["requestValidatorId"] = args ? args.requestValidatorId : undefined;
            inputs["resourceId"] = args ? args.resourceId : undefined;
            inputs["restApi"] = args ? args.restApi : undefined;
        }
        super("aws:apigateway/method:Method", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Method resources.
 */
export interface MethodState {
    /**
     * Specify if the method requires an API key
     */
    readonly apiKeyRequired?: boolean;
    /**
     * The type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)
     */
    readonly authorization?: string;
    /**
     * The authorization scopes used when the authorization is `COGNITO_USER_POOLS`
     */
    readonly authorizationScopes?: string[];
    /**
     * The authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`
     */
    readonly authorizerId?: string;
    /**
     * The HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`)
     */
    readonly httpMethod?: string;
    /**
     * A map of the API models used for the request's content type
     * where key is the content type (e.g. `application/json`)
     * and value is either `Error`, `Empty` (built-in models) or `aws_api_gateway_model`'s `name`.
     */
    readonly requestModels?: {[key: string]: string};
    /**
     * A map of request query string parameters and headers that should be passed to the integration.
     * For example:
     * ```typescript
     * import * as pulumi from "@pulumi/pulumi";
     * ```
     * would define that the header `X-Some-Header` and the query string `some-query-param` must be provided on the request, or
     */
    readonly requestParameters?: {[key: string]: boolean};
    /**
     * **Deprecated**, use `request_parameters` instead.
     */
    readonly requestParametersInJson?: string;
    /**
     * The ID of a `aws_api_gateway_request_validator`
     */
    readonly requestValidatorId?: string;
    /**
     * The API resource ID
     */
    readonly resourceId?: string;
    /**
     * The ID of the associated REST API
     */
    readonly restApi?: RestApi;
}

/**
 * The set of arguments for constructing a Method resource.
 */
export interface MethodArgs {
    /**
     * Specify if the method requires an API key
     */
    readonly apiKeyRequired?: boolean;
    /**
     * The type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)
     */
    readonly authorization: string;
    /**
     * The authorization scopes used when the authorization is `COGNITO_USER_POOLS`
     */
    readonly authorizationScopes?: string[];
    /**
     * The authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`
     */
    readonly authorizerId?: string;
    /**
     * The HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`)
     */
    readonly httpMethod: string;
    /**
     * A map of the API models used for the request's content type
     * where key is the content type (e.g. `application/json`)
     * and value is either `Error`, `Empty` (built-in models) or `aws_api_gateway_model`'s `name`.
     */
    readonly requestModels?: {[key: string]: string};
    /**
     * A map of request query string parameters and headers that should be passed to the integration.
     * For example:
     * ```typescript
     * import * as pulumi from "@pulumi/pulumi";
     * ```
     * would define that the header `X-Some-Header` and the query string `some-query-param` must be provided on the request, or
     */
    readonly requestParameters?: {[key: string]: boolean};
    /**
     * **Deprecated**, use `request_parameters` instead.
     */
    readonly requestParametersInJson?: string;
    /**
     * The ID of a `aws_api_gateway_request_validator`
     */
    readonly requestValidatorId?: string;
    /**
     * The API resource ID
     */
    readonly resourceId: string;
    /**
     * The ID of the associated REST API
     */
    readonly restApi: RestApi;
}
