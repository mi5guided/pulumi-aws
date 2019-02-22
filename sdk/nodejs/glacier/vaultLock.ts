// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Glacier Vault Lock. You can refer to the [Glacier Developer Guide](https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html) for a full explanation of the Glacier Vault Lock functionality.
 * 
 * > **NOTE:** This resource allows you to test Glacier Vault Lock policies by setting the `complete_lock` argument to `false`. When testing policies in this manner, the Glacier Vault Lock automatically expires after 24 hours and Terraform will show this resource as needing recreation after that time. To permanently apply the policy, set the `complete_lock` argument to `true`. When changing `complete_lock` to `true`, it is expected the resource will show as recreating.
 * 
 * !> **WARNING:** Once a Glacier Vault Lock is completed, it is immutable. The deletion of the Glacier Vault Lock is not be possible and attempting to remove it from Terraform will return an error. Set the `ignore_deletion_error` argument to `true` and apply this configuration before attempting to delete this resource via Terraform or use `terraform state rm` to remove this resource from Terraform management.
 * 
 * ## Example Usage
 * 
 * ### Testing Glacier Vault Lock Policy
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleVault = new aws.glacier.Vault("example", {});
 * const examplePolicyDocument = pulumi.output(aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: ["glacier:DeleteArchive"],
 *         conditions: [{
 *             test: "NumericLessThanEquals",
 *             values: ["365"],
 *             variable: "glacier:ArchiveAgeinDays",
 *         }],
 *         effect: "Deny",
 *         resources: [exampleVault.arn],
 *     }],
 * }));
 * const exampleVaultLock = new aws.glacier.VaultLock("example", {
 *     completeLock: false,
 *     policy: examplePolicyDocument.apply(examplePolicyDocument => examplePolicyDocument.json),
 *     vaultName: exampleVault.name,
 * });
 * ```
 * 
 * ### Permanently Applying Glacier Vault Lock Policy
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.glacier.VaultLock("example", {
 *     completeLock: true,
 *     policy: aws_iam_policy_document_example.json.apply(json => json),
 *     vaultName: aws_glacier_vault_example.name,
 * });
 * ```
 */
export class VaultLock extends pulumi.CustomResource {
    /**
     * Get an existing VaultLock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VaultLockState, opts?: pulumi.CustomResourceOptions): VaultLock {
        return new VaultLock(name, <any>state, { ...opts, id: id });
    }

    /**
     * Boolean whether to permanently apply this Glacier Lock Policy. Once completed, this cannot be undone. If set to `false`, the Glacier Lock Policy remains in a testing mode for 24 hours. After that time, the Glacier Lock Policy is automatically removed by Glacier and the Terraform resource will show as needing recreation. Changing this from `false` to `true` will show as resource recreation, which is expected. Changing this from `true` to `false` is not possible unless the Glacier Vault is recreated at the same time.
     */
    public readonly completeLock: pulumi.Output<boolean>;
    /**
     * Allow Terraform to ignore the error returned when attempting to delete the Glacier Lock Policy. This can be used to delete or recreate the Glacier Vault via Terraform, for example, if the Glacier Vault Lock policy permits that action. This should only be used in conjunction with `complete_lock` being set to `true`.
     */
    public readonly ignoreDeletionError: pulumi.Output<boolean | undefined>;
    /**
     * JSON string containing the IAM policy to apply as the Glacier Vault Lock policy.
     */
    public readonly policy: pulumi.Output<string>;
    /**
     * The name of the Glacier Vault.
     */
    public readonly vaultName: pulumi.Output<string>;

    /**
     * Create a VaultLock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<VaultLockArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<VaultLockArgs> | pulumi.InputObject<VaultLockState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: VaultLockState = argsOrState as VaultLockState | undefined;
            inputs["completeLock"] = state ? state.completeLock : undefined;
            inputs["ignoreDeletionError"] = state ? state.ignoreDeletionError : undefined;
            inputs["policy"] = state ? state.policy : undefined;
            inputs["vaultName"] = state ? state.vaultName : undefined;
        } else {
            const args = argsOrState as VaultLockArgs | undefined;
            if (!args || args.completeLock === undefined) {
                throw new Error("Missing required property 'completeLock'");
            }
            if (!args || args.policy === undefined) {
                throw new Error("Missing required property 'policy'");
            }
            if (!args || args.vaultName === undefined) {
                throw new Error("Missing required property 'vaultName'");
            }
            inputs["completeLock"] = args ? args.completeLock : undefined;
            inputs["ignoreDeletionError"] = args ? args.ignoreDeletionError : undefined;
            inputs["policy"] = args ? args.policy : undefined;
            inputs["vaultName"] = args ? args.vaultName : undefined;
        }
        super("aws:glacier/vaultLock:VaultLock", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VaultLock resources.
 */
export interface VaultLockState {
    /**
     * Boolean whether to permanently apply this Glacier Lock Policy. Once completed, this cannot be undone. If set to `false`, the Glacier Lock Policy remains in a testing mode for 24 hours. After that time, the Glacier Lock Policy is automatically removed by Glacier and the Terraform resource will show as needing recreation. Changing this from `false` to `true` will show as resource recreation, which is expected. Changing this from `true` to `false` is not possible unless the Glacier Vault is recreated at the same time.
     */
    readonly completeLock?: boolean;
    /**
     * Allow Terraform to ignore the error returned when attempting to delete the Glacier Lock Policy. This can be used to delete or recreate the Glacier Vault via Terraform, for example, if the Glacier Vault Lock policy permits that action. This should only be used in conjunction with `complete_lock` being set to `true`.
     */
    readonly ignoreDeletionError?: boolean;
    /**
     * JSON string containing the IAM policy to apply as the Glacier Vault Lock policy.
     */
    readonly policy?: string;
    /**
     * The name of the Glacier Vault.
     */
    readonly vaultName?: string;
}

/**
 * The set of arguments for constructing a VaultLock resource.
 */
export interface VaultLockArgs {
    /**
     * Boolean whether to permanently apply this Glacier Lock Policy. Once completed, this cannot be undone. If set to `false`, the Glacier Lock Policy remains in a testing mode for 24 hours. After that time, the Glacier Lock Policy is automatically removed by Glacier and the Terraform resource will show as needing recreation. Changing this from `false` to `true` will show as resource recreation, which is expected. Changing this from `true` to `false` is not possible unless the Glacier Vault is recreated at the same time.
     */
    readonly completeLock: boolean;
    /**
     * Allow Terraform to ignore the error returned when attempting to delete the Glacier Lock Policy. This can be used to delete or recreate the Glacier Vault via Terraform, for example, if the Glacier Vault Lock policy permits that action. This should only be used in conjunction with `complete_lock` being set to `true`.
     */
    readonly ignoreDeletionError?: boolean;
    /**
     * JSON string containing the IAM policy to apply as the Glacier Vault Lock policy.
     */
    readonly policy: string;
    /**
     * The name of the Glacier Vault.
     */
    readonly vaultName: string;
}
