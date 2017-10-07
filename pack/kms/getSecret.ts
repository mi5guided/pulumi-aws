// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * The KMS secret data source allows you to use data encrypted with the AWS KMS
 * service within your resource definitions.
 * 
 * ~> **NOTE**: Using this data provider will allow you to conceal secret data within your
 * resource definitions but does not take care of protecting that data in the
 * logging output, plan output or state output.
 * 
 * Please take care to secure your secret data outside of resource definitions.
 */
export function getSecret(args: GetSecretArgs): Promise<GetSecretResult> {
    return pulumi.runtime.invoke("aws:kms/getSecret:getSecret", {
        "__hasDynamicAttributes": args.__hasDynamicAttributes,
        "secret": args.secret,
    });
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    __hasDynamicAttributes?: pulumi.ComputedValue<string>;
    /**
     * One or more encrypted payload definitions from the KMS
     * service.  See the Secret Definitions below.
     */
    secret: pulumi.ComputedValue<{ context?: pulumi.ComputedValue<{[key: string]: pulumi.ComputedValue<string>}>, grantTokens?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[], name: pulumi.ComputedValue<string>, payload: pulumi.ComputedValue<string> }>[];
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
}
