// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Step Function Activity resource
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const sfnActivity = new aws.sfn.Activity("sfn_activity", {});
 * ```
 */
export class Activity extends pulumi.CustomResource {
    /**
     * Get an existing Activity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActivityState, opts?: pulumi.CustomResourceOptions): Activity {
        return new Activity(name, <any>state, { ...opts, id: id });
    }

    /**
     * The date the activity was created.
     */
    public /*out*/ readonly creationDate: pulumi.Output<string>;
    /**
     * The name of the activity to create.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Key-value mapping of resource tags
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a Activity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<ActivityArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<ActivityArgs> | pulumi.InputObject<ActivityState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ActivityState = argsOrState as ActivityState | undefined;
            inputs["creationDate"] = state ? state.creationDate : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ActivityArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["creationDate"] = undefined /*out*/;
        }
        super("aws:sfn/activity:Activity", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Activity resources.
 */
export interface ActivityState {
    /**
     * The date the activity was created.
     */
    readonly creationDate?: string;
    /**
     * The name of the activity to create.
     */
    readonly name?: string;
    /**
     * Key-value mapping of resource tags
     */
    readonly tags?: {[key: string]: any};
}

/**
 * The set of arguments for constructing a Activity resource.
 */
export interface ActivityArgs {
    /**
     * The name of the activity to create.
     */
    readonly name?: string;
    /**
     * Key-value mapping of resource tags
     */
    readonly tags?: {[key: string]: any};
}
