// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Role} from "./role";

/**
 * Provides an IAM instance profile.
 * 
 * > **NOTE:** Either `role` or `roles` (**deprecated**) must be specified.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const role = new aws.iam.Role("role", {
 *     assumeRolePolicy: `{
 *     "Version": "2012-10-17",
 *     "Statement": [
 *         {
 *             "Action": "sts:AssumeRole",
 *             "Principal": {
 *                "Service": "ec2.amazonaws.com"
 *             },
 *             "Effect": "Allow",
 *             "Sid": ""
 *         }
 *     ]
 * }
 * `,
 *     path: "/",
 * });
 * const testProfile = new aws.iam.InstanceProfile("test_profile", {
 *     role: role.name,
 * });
 * ```
 */
export class InstanceProfile extends pulumi.CustomResource {
    /**
     * Get an existing InstanceProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceProfileState, opts?: pulumi.CustomResourceOptions): InstanceProfile {
        return new InstanceProfile(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN assigned by AWS to the instance profile.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The creation timestamp of the instance profile.
     */
    public /*out*/ readonly createDate: pulumi.Output<string>;
    /**
     * The profile's name. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * Path in which to create the profile.
     */
    public readonly path: pulumi.Output<string | undefined>;
    /**
     * The role name to include in the profile.
     */
    public readonly role: pulumi.Output<Role>;
    /**
     * 
     * A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
     * WARNING: This is deprecated since [version 0.9.3 (April 12, 2017)](https://github.com/hashicorp/terraform/blob/master/CHANGELOG.md#093-april-12-2017), as >= 2 roles are not possible. See [issue #11575](https://github.com/hashicorp/terraform/issues/11575).
     */
    public readonly roles: pulumi.Output<Role[]>;
    /**
     * The [unique ID][1] assigned by AWS.
     */
    public /*out*/ readonly uniqueId: pulumi.Output<string>;

    /**
     * Create a InstanceProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<InstanceProfileArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<InstanceProfileArgs> | pulumi.InputObject<InstanceProfileState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: InstanceProfileState = argsOrState as InstanceProfileState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["createDate"] = state ? state.createDate : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["path"] = state ? state.path : undefined;
            inputs["role"] = state ? state.role : undefined;
            inputs["roles"] = state ? state.roles : undefined;
            inputs["uniqueId"] = state ? state.uniqueId : undefined;
        } else {
            const args = argsOrState as InstanceProfileArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["path"] = args ? args.path : undefined;
            inputs["role"] = args ? args.role : undefined;
            inputs["roles"] = args ? args.roles : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["createDate"] = undefined /*out*/;
            inputs["uniqueId"] = undefined /*out*/;
        }
        super("aws:iam/instanceProfile:InstanceProfile", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InstanceProfile resources.
 */
export interface InstanceProfileState {
    /**
     * The ARN assigned by AWS to the instance profile.
     */
    readonly arn?: string;
    /**
     * The creation timestamp of the instance profile.
     */
    readonly createDate?: string;
    /**
     * The profile's name. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: string;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: string;
    /**
     * Path in which to create the profile.
     */
    readonly path?: string;
    /**
     * The role name to include in the profile.
     */
    readonly role?: Role;
    /**
     * 
     * A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
     * WARNING: This is deprecated since [version 0.9.3 (April 12, 2017)](https://github.com/hashicorp/terraform/blob/master/CHANGELOG.md#093-april-12-2017), as >= 2 roles are not possible. See [issue #11575](https://github.com/hashicorp/terraform/issues/11575).
     */
    readonly roles?: Role[];
    /**
     * The [unique ID][1] assigned by AWS.
     */
    readonly uniqueId?: string;
}

/**
 * The set of arguments for constructing a InstanceProfile resource.
 */
export interface InstanceProfileArgs {
    /**
     * The profile's name. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: string;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: string;
    /**
     * Path in which to create the profile.
     */
    readonly path?: string;
    /**
     * The role name to include in the profile.
     */
    readonly role?: Role;
    /**
     * 
     * A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
     * WARNING: This is deprecated since [version 0.9.3 (April 12, 2017)](https://github.com/hashicorp/terraform/blob/master/CHANGELOG.md#093-april-12-2017), as >= 2 roles are not possible. See [issue #11575](https://github.com/hashicorp/terraform/issues/11575).
     */
    readonly roles?: Role[];
}
