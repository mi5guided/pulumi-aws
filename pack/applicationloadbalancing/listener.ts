// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

export class Listener extends pulumi.Resource {
    public /*out*/ readonly arn: pulumi.Computed<string>;
    public readonly certificateArn?: pulumi.Computed<string>;
    public readonly defaultActions: pulumi.Computed<{ targetGroupArn: string, type: string }[]>;
    public readonly loadBalancerArn: pulumi.Computed<string>;
    public readonly port: pulumi.Computed<number>;
    public readonly protocol?: pulumi.Computed<string>;
    public readonly sslPolicy: pulumi.Computed<string>;

    /**
     * Create a Listener resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Listener instance
     * @param args A collection of arguments for creating this Listener intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ListenerArgs, dependsOn?: pulumi.Resource[]) {
        if (args.defaultActions === undefined) {
            throw new Error("Missing required property 'defaultActions'");
        }
        if (args.loadBalancerArn === undefined) {
            throw new Error("Missing required property 'loadBalancerArn'");
        }
        if (args.port === undefined) {
            throw new Error("Missing required property 'port'");
        }
        super("aws:applicationloadbalancing/listener:Listener", urnName, {
            "certificateArn": args.certificateArn,
            "defaultActions": args.defaultActions,
            "loadBalancerArn": args.loadBalancerArn,
            "port": args.port,
            "protocol": args.protocol,
            "sslPolicy": args.sslPolicy,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Listener resource.
 */
export interface ListenerArgs {
    readonly certificateArn?: pulumi.ComputedValue<string>;
    readonly defaultActions: pulumi.ComputedValue<{ targetGroupArn: pulumi.ComputedValue<string>, type: pulumi.ComputedValue<string> }>[];
    readonly loadBalancerArn: pulumi.ComputedValue<string>;
    readonly port: pulumi.ComputedValue<number>;
    readonly protocol?: pulumi.ComputedValue<string>;
    readonly sslPolicy?: pulumi.ComputedValue<string>;
}

