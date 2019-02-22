// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an AutoScaling Schedule resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const foobarGroup = new aws.autoscaling.Group("foobar", {
 *     availabilityZones: ["us-west-2a"],
 *     forceDelete: true,
 *     healthCheckGracePeriod: 300,
 *     healthCheckType: "ELB",
 *     maxSize: 1,
 *     minSize: 1,
 *     terminationPolicies: ["OldestInstance"],
 * });
 * const foobarSchedule = new aws.autoscaling.Schedule("foobar", {
 *     autoscalingGroupName: foobarGroup.name,
 *     desiredCapacity: 0,
 *     endTime: "2016-12-12T06:00:00Z",
 *     maxSize: 1,
 *     minSize: 0,
 *     scheduledActionName: "foobar",
 *     startTime: "2016-12-11T18:00:00Z",
 * });
 * ```
 */
export class Schedule extends pulumi.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduleState, opts?: pulumi.CustomResourceOptions): Schedule {
        return new Schedule(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN assigned by AWS to the autoscaling schedule.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The name or Amazon Resource Name (ARN) of the Auto Scaling group.
     */
    public readonly autoscalingGroupName: pulumi.Output<string>;
    /**
     * The number of EC2 instances that should be running in the group. Default 0.  Set to -1 if you don't want to change the desired capacity at the scheduled time.
     */
    public readonly desiredCapacity: pulumi.Output<number>;
    /**
     * The time for this action to end, in "YYYY-MM-DDThh:mm:ssZ" format in UTC/GMT only (for example, 2014-06-01T00:00:00Z ).
     * If you try to schedule your action in the past, Auto Scaling returns an error message.
     */
    public readonly endTime: pulumi.Output<string>;
    /**
     * The maximum size for the Auto Scaling group. Default 0.
     * Set to -1 if you don't want to change the maximum size at the scheduled time.
     */
    public readonly maxSize: pulumi.Output<number>;
    /**
     * The minimum size for the Auto Scaling group. Default 0.
     * Set to -1 if you don't want to change the minimum size at the scheduled time.
     */
    public readonly minSize: pulumi.Output<number>;
    /**
     * The time when recurring future actions will start. Start time is specified by the user following the Unix cron syntax format.
     */
    public readonly recurrence: pulumi.Output<string>;
    /**
     * The name of this scaling action.
     */
    public readonly scheduledActionName: pulumi.Output<string>;
    /**
     * The time for this action to start, in "YYYY-MM-DDThh:mm:ssZ" format in UTC/GMT only (for example, 2014-06-01T00:00:00Z ).
     * If you try to schedule your action in the past, Auto Scaling returns an error message.
     */
    public readonly startTime: pulumi.Output<string>;

    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<ScheduleArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<ScheduleArgs> | pulumi.InputObject<ScheduleState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ScheduleState = argsOrState as ScheduleState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["autoscalingGroupName"] = state ? state.autoscalingGroupName : undefined;
            inputs["desiredCapacity"] = state ? state.desiredCapacity : undefined;
            inputs["endTime"] = state ? state.endTime : undefined;
            inputs["maxSize"] = state ? state.maxSize : undefined;
            inputs["minSize"] = state ? state.minSize : undefined;
            inputs["recurrence"] = state ? state.recurrence : undefined;
            inputs["scheduledActionName"] = state ? state.scheduledActionName : undefined;
            inputs["startTime"] = state ? state.startTime : undefined;
        } else {
            const args = argsOrState as ScheduleArgs | undefined;
            if (!args || args.autoscalingGroupName === undefined) {
                throw new Error("Missing required property 'autoscalingGroupName'");
            }
            if (!args || args.scheduledActionName === undefined) {
                throw new Error("Missing required property 'scheduledActionName'");
            }
            inputs["autoscalingGroupName"] = args ? args.autoscalingGroupName : undefined;
            inputs["desiredCapacity"] = args ? args.desiredCapacity : undefined;
            inputs["endTime"] = args ? args.endTime : undefined;
            inputs["maxSize"] = args ? args.maxSize : undefined;
            inputs["minSize"] = args ? args.minSize : undefined;
            inputs["recurrence"] = args ? args.recurrence : undefined;
            inputs["scheduledActionName"] = args ? args.scheduledActionName : undefined;
            inputs["startTime"] = args ? args.startTime : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:autoscaling/schedule:Schedule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Schedule resources.
 */
export interface ScheduleState {
    /**
     * The ARN assigned by AWS to the autoscaling schedule.
     */
    readonly arn?: string;
    /**
     * The name or Amazon Resource Name (ARN) of the Auto Scaling group.
     */
    readonly autoscalingGroupName?: string;
    /**
     * The number of EC2 instances that should be running in the group. Default 0.  Set to -1 if you don't want to change the desired capacity at the scheduled time.
     */
    readonly desiredCapacity?: number;
    /**
     * The time for this action to end, in "YYYY-MM-DDThh:mm:ssZ" format in UTC/GMT only (for example, 2014-06-01T00:00:00Z ).
     * If you try to schedule your action in the past, Auto Scaling returns an error message.
     */
    readonly endTime?: string;
    /**
     * The maximum size for the Auto Scaling group. Default 0.
     * Set to -1 if you don't want to change the maximum size at the scheduled time.
     */
    readonly maxSize?: number;
    /**
     * The minimum size for the Auto Scaling group. Default 0.
     * Set to -1 if you don't want to change the minimum size at the scheduled time.
     */
    readonly minSize?: number;
    /**
     * The time when recurring future actions will start. Start time is specified by the user following the Unix cron syntax format.
     */
    readonly recurrence?: string;
    /**
     * The name of this scaling action.
     */
    readonly scheduledActionName?: string;
    /**
     * The time for this action to start, in "YYYY-MM-DDThh:mm:ssZ" format in UTC/GMT only (for example, 2014-06-01T00:00:00Z ).
     * If you try to schedule your action in the past, Auto Scaling returns an error message.
     */
    readonly startTime?: string;
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    /**
     * The name or Amazon Resource Name (ARN) of the Auto Scaling group.
     */
    readonly autoscalingGroupName: string;
    /**
     * The number of EC2 instances that should be running in the group. Default 0.  Set to -1 if you don't want to change the desired capacity at the scheduled time.
     */
    readonly desiredCapacity?: number;
    /**
     * The time for this action to end, in "YYYY-MM-DDThh:mm:ssZ" format in UTC/GMT only (for example, 2014-06-01T00:00:00Z ).
     * If you try to schedule your action in the past, Auto Scaling returns an error message.
     */
    readonly endTime?: string;
    /**
     * The maximum size for the Auto Scaling group. Default 0.
     * Set to -1 if you don't want to change the maximum size at the scheduled time.
     */
    readonly maxSize?: number;
    /**
     * The minimum size for the Auto Scaling group. Default 0.
     * Set to -1 if you don't want to change the minimum size at the scheduled time.
     */
    readonly minSize?: number;
    /**
     * The time when recurring future actions will start. Start time is specified by the user following the Unix cron syntax format.
     */
    readonly recurrence?: string;
    /**
     * The name of this scaling action.
     */
    readonly scheduledActionName: string;
    /**
     * The time for this action to start, in "YYYY-MM-DDThh:mm:ssZ" format in UTC/GMT only (for example, 2014-06-01T00:00:00Z ).
     * If you try to schedule your action in the past, Auto Scaling returns an error message.
     */
    readonly startTime?: string;
}
