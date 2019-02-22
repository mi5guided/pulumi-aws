// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a MediaStore Container.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.mediastore.Container("example", {});
 * ```
 */
export class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerState, opts?: pulumi.CustomResourceOptions): Container {
        return new Container(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN of the container.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The DNS endpoint of the container.
     */
    public /*out*/ readonly endpoint: pulumi.Output<string>;
    /**
     * The name of the container. Must contain alphanumeric characters or underscores.
     */
    public readonly name: pulumi.Output<string>;

    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<ContainerArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<ContainerArgs> | pulumi.InputObject<ContainerState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ContainerState = argsOrState as ContainerState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ContainerArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
        }
        super("aws:mediastore/container:Container", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Container resources.
 */
export interface ContainerState {
    /**
     * The ARN of the container.
     */
    readonly arn?: string;
    /**
     * The DNS endpoint of the container.
     */
    readonly endpoint?: string;
    /**
     * The name of the container. Must contain alphanumeric characters or underscores.
     */
    readonly name?: string;
}

/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * The name of the container. Must contain alphanumeric characters or underscores.
     */
    readonly name?: string;
}
