// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage EC2 Fleets.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ec2.Fleet("example", {
 *     launchTemplateConfig: {
 *         launchTemplateSpecification: {
 *             launchTemplateId: aws_launch_template_example.id,
 *             version: aws_launch_template_example.latestVersion,
 *         },
 *     },
 *     targetCapacitySpecification: {
 *         defaultTargetCapacityType: "spot",
 *         totalTargetCapacity: 5,
 *     },
 * });
 * ```
 */
export class Fleet extends pulumi.CustomResource {
    /**
     * Get an existing Fleet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FleetState, opts?: pulumi.CustomResourceOptions): Fleet {
        return new Fleet(name, <any>state, { ...opts, id: id });
    }

    /**
     * Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`.
     */
    public readonly excessCapacityTerminationPolicy: pulumi.Output<string | undefined>;
    /**
     * Nested argument containing EC2 Launch Template configurations. Defined below.
     */
    public readonly launchTemplateConfig: pulumi.Output<{ launchTemplateSpecification: { launchTemplateId?: string, launchTemplateName?: string, version: string }, overrides?: { availabilityZone?: string, instanceType?: string, maxPrice?: string, priority?: number, subnetId?: string, weightedCapacity?: number }[] }>;
    /**
     * Nested argument containing On-Demand configurations. Defined below.
     */
    public readonly onDemandOptions: pulumi.Output<{ allocationStrategy?: string } | undefined>;
    /**
     * Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`.
     */
    public readonly replaceUnhealthyInstances: pulumi.Output<boolean | undefined>;
    /**
     * Nested argument containing Spot configurations. Defined below.
     */
    public readonly spotOptions: pulumi.Output<{ allocationStrategy?: string, instanceInterruptionBehavior?: string, instancePoolsToUseCount?: number } | undefined>;
    /**
     * Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template.
     */
    public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Nested argument containing target capacity configurations. Defined below.
     */
    public readonly targetCapacitySpecification: pulumi.Output<{ defaultTargetCapacityType: string, onDemandTargetCapacity?: number, spotTargetCapacity?: number, totalTargetCapacity: number }>;
    /**
     * Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
     */
    public readonly terminateInstances: pulumi.Output<boolean | undefined>;
    /**
     * Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
     */
    public readonly terminateInstancesWithExpiration: pulumi.Output<boolean | undefined>;
    /**
     * The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`. Defaults to `maintain`.
     */
    public readonly type: pulumi.Output<string | undefined>;

    /**
     * Create a Fleet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<FleetArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<FleetArgs> | pulumi.InputObject<FleetState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: FleetState = argsOrState as FleetState | undefined;
            inputs["excessCapacityTerminationPolicy"] = state ? state.excessCapacityTerminationPolicy : undefined;
            inputs["launchTemplateConfig"] = state ? state.launchTemplateConfig : undefined;
            inputs["onDemandOptions"] = state ? state.onDemandOptions : undefined;
            inputs["replaceUnhealthyInstances"] = state ? state.replaceUnhealthyInstances : undefined;
            inputs["spotOptions"] = state ? state.spotOptions : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["targetCapacitySpecification"] = state ? state.targetCapacitySpecification : undefined;
            inputs["terminateInstances"] = state ? state.terminateInstances : undefined;
            inputs["terminateInstancesWithExpiration"] = state ? state.terminateInstancesWithExpiration : undefined;
            inputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as FleetArgs | undefined;
            if (!args || args.launchTemplateConfig === undefined) {
                throw new Error("Missing required property 'launchTemplateConfig'");
            }
            if (!args || args.targetCapacitySpecification === undefined) {
                throw new Error("Missing required property 'targetCapacitySpecification'");
            }
            inputs["excessCapacityTerminationPolicy"] = args ? args.excessCapacityTerminationPolicy : undefined;
            inputs["launchTemplateConfig"] = args ? args.launchTemplateConfig : undefined;
            inputs["onDemandOptions"] = args ? args.onDemandOptions : undefined;
            inputs["replaceUnhealthyInstances"] = args ? args.replaceUnhealthyInstances : undefined;
            inputs["spotOptions"] = args ? args.spotOptions : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetCapacitySpecification"] = args ? args.targetCapacitySpecification : undefined;
            inputs["terminateInstances"] = args ? args.terminateInstances : undefined;
            inputs["terminateInstancesWithExpiration"] = args ? args.terminateInstancesWithExpiration : undefined;
            inputs["type"] = args ? args.type : undefined;
        }
        super("aws:ec2/fleet:Fleet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Fleet resources.
 */
export interface FleetState {
    /**
     * Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`.
     */
    readonly excessCapacityTerminationPolicy?: string;
    /**
     * Nested argument containing EC2 Launch Template configurations. Defined below.
     */
    readonly launchTemplateConfig?: { launchTemplateSpecification: { launchTemplateId?: string, launchTemplateName?: string, version: string }, overrides?: { availabilityZone?: string, instanceType?: string, maxPrice?: string, priority?: number, subnetId?: string, weightedCapacity?: number }[] };
    /**
     * Nested argument containing On-Demand configurations. Defined below.
     */
    readonly onDemandOptions?: { allocationStrategy?: string };
    /**
     * Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`.
     */
    readonly replaceUnhealthyInstances?: boolean;
    /**
     * Nested argument containing Spot configurations. Defined below.
     */
    readonly spotOptions?: { allocationStrategy?: string, instanceInterruptionBehavior?: string, instancePoolsToUseCount?: number };
    /**
     * Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Nested argument containing target capacity configurations. Defined below.
     */
    readonly targetCapacitySpecification?: { defaultTargetCapacityType: string, onDemandTargetCapacity?: number, spotTargetCapacity?: number, totalTargetCapacity: number };
    /**
     * Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
     */
    readonly terminateInstances?: boolean;
    /**
     * Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
     */
    readonly terminateInstancesWithExpiration?: boolean;
    /**
     * The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`. Defaults to `maintain`.
     */
    readonly type?: string;
}

/**
 * The set of arguments for constructing a Fleet resource.
 */
export interface FleetArgs {
    /**
     * Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`.
     */
    readonly excessCapacityTerminationPolicy?: string;
    /**
     * Nested argument containing EC2 Launch Template configurations. Defined below.
     */
    readonly launchTemplateConfig: { launchTemplateSpecification: { launchTemplateId?: string, launchTemplateName?: string, version: string }, overrides?: { availabilityZone?: string, instanceType?: string, maxPrice?: string, priority?: number, subnetId?: string, weightedCapacity?: number }[] };
    /**
     * Nested argument containing On-Demand configurations. Defined below.
     */
    readonly onDemandOptions?: { allocationStrategy?: string };
    /**
     * Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`.
     */
    readonly replaceUnhealthyInstances?: boolean;
    /**
     * Nested argument containing Spot configurations. Defined below.
     */
    readonly spotOptions?: { allocationStrategy?: string, instanceInterruptionBehavior?: string, instancePoolsToUseCount?: number };
    /**
     * Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Nested argument containing target capacity configurations. Defined below.
     */
    readonly targetCapacitySpecification: { defaultTargetCapacityType: string, onDemandTargetCapacity?: number, spotTargetCapacity?: number, totalTargetCapacity: number };
    /**
     * Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
     */
    readonly terminateInstances?: boolean;
    /**
     * Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
     */
    readonly terminateInstancesWithExpiration?: boolean;
    /**
     * The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`. Defaults to `maintain`.
     */
    readonly type?: string;
}
