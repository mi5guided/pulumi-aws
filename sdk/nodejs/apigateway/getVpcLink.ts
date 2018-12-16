// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get the id of a VPC Link in
 * API Gateway. To fetch the VPC Link you must provide a name to match against. 
 * As there is no unique name constraint on API Gateway VPC Links this data source will 
 * error if there is more than one match.
 */
export function getVpcLink(args: GetVpcLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcLinkResult> {
    return pulumi.runtime.invoke("aws:apigateway/getVpcLink:getVpcLink", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getVpcLink.
 */
export interface GetVpcLinkArgs {
    /**
     * The name of the API Gateway VPC Link to look up. If no API Gateway VPC Link is found with this name, an error will be returned. 
     * If multiple API Gateway VPC Links are found with this name, an error will be returned.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getVpcLink.
 */
export interface GetVpcLinkResult {
    /**
     * Set to the ID of the found API Gateway VPC Link.
     */
    readonly id: string;
}
