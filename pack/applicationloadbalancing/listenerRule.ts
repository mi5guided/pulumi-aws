// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

export class ListenerRule extends pulumi.Resource {
    public readonly actions: pulumi.Computed<{ targetGroupArn: string, type: string }[]>;
    public /*out*/ readonly arn: pulumi.Computed<string>;
    public readonly conditions: pulumi.Computed<{ field?: string, values?: string[] }[]>;
    public readonly listenerArn: pulumi.Computed<string>;
    public readonly priority: pulumi.Computed<number>;

    /**
     * Create a ListenerRule resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ListenerRule instance
     * @param args A collection of arguments for creating this ListenerRule intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ListenerRuleArgs, dependsOn?: pulumi.Resource[]) {
        if (args.actions === undefined) {
            throw new Error("Missing required property 'actions'");
        }
        if (args.conditions === undefined) {
            throw new Error("Missing required property 'conditions'");
        }
        if (args.listenerArn === undefined) {
            throw new Error("Missing required property 'listenerArn'");
        }
        if (args.priority === undefined) {
            throw new Error("Missing required property 'priority'");
        }
        super("aws:applicationloadbalancing/listenerRule:ListenerRule", urnName, {
            "actions": args.actions,
            "conditions": args.conditions,
            "listenerArn": args.listenerArn,
            "priority": args.priority,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ListenerRule resource.
 */
export interface ListenerRuleArgs {
    readonly actions: pulumi.ComputedValue<{ targetGroupArn: pulumi.ComputedValue<string>, type: pulumi.ComputedValue<string> }>[];
    readonly conditions: pulumi.ComputedValue<{ field?: pulumi.ComputedValue<string>, values?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[] }>[];
    readonly listenerArn: pulumi.ComputedValue<string>;
    readonly priority: pulumi.ComputedValue<number>;
}

