// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an AWS App Mesh virtual node resource.
 */
export class VirtualNode extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNodeState, opts?: pulumi.CustomResourceOptions): VirtualNode {
        return new VirtualNode(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN of the virtual node.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The creation date of the virtual node.
     */
    public /*out*/ readonly createdDate: pulumi.Output<string>;
    /**
     * The last update date of the virtual node.
     */
    public /*out*/ readonly lastUpdatedDate: pulumi.Output<string>;
    /**
     * The name of the service mesh in which to create the virtual node.
     */
    public readonly meshName: pulumi.Output<string>;
    /**
     * The name to use for the virtual node.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The virtual node specification to apply.
     */
    public readonly spec: pulumi.Output<{ backends?: string[], listener?: { portMapping: { port: number, protocol: string } }, serviceDiscovery?: { dns: { serviceName: string } } }>;

    /**
     * Create a VirtualNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNodeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualNodeArgs | VirtualNodeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: VirtualNodeState = argsOrState as VirtualNodeState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["createdDate"] = state ? state.createdDate : undefined;
            inputs["lastUpdatedDate"] = state ? state.lastUpdatedDate : undefined;
            inputs["meshName"] = state ? state.meshName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["spec"] = state ? state.spec : undefined;
        } else {
            const args = argsOrState as VirtualNodeArgs | undefined;
            if (!args || args.meshName === undefined) {
                throw new Error("Missing required property 'meshName'");
            }
            if (!args || args.spec === undefined) {
                throw new Error("Missing required property 'spec'");
            }
            inputs["meshName"] = args ? args.meshName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["spec"] = args ? args.spec : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["createdDate"] = undefined /*out*/;
            inputs["lastUpdatedDate"] = undefined /*out*/;
        }
        super("aws:appmesh/virtualNode:VirtualNode", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VirtualNode resources.
 */
export interface VirtualNodeState {
    /**
     * The ARN of the virtual node.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The creation date of the virtual node.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * The last update date of the virtual node.
     */
    readonly lastUpdatedDate?: pulumi.Input<string>;
    /**
     * The name of the service mesh in which to create the virtual node.
     */
    readonly meshName?: pulumi.Input<string>;
    /**
     * The name to use for the virtual node.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The virtual node specification to apply.
     */
    readonly spec?: pulumi.Input<{ backends?: pulumi.Input<pulumi.Input<string>[]>, listener?: pulumi.Input<{ portMapping: pulumi.Input<{ port: pulumi.Input<number>, protocol: pulumi.Input<string> }> }>, serviceDiscovery?: pulumi.Input<{ dns: pulumi.Input<{ serviceName: pulumi.Input<string> }> }> }>;
}

/**
 * The set of arguments for constructing a VirtualNode resource.
 */
export interface VirtualNodeArgs {
    /**
     * The name of the service mesh in which to create the virtual node.
     */
    readonly meshName: pulumi.Input<string>;
    /**
     * The name to use for the virtual node.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The virtual node specification to apply.
     */
    readonly spec: pulumi.Input<{ backends?: pulumi.Input<pulumi.Input<string>[]>, listener?: pulumi.Input<{ portMapping: pulumi.Input<{ port: pulumi.Input<number>, protocol: pulumi.Input<string> }> }>, serviceDiscovery?: pulumi.Input<{ dns: pulumi.Input<{ serviceName: pulumi.Input<string> }> }> }>;
}
