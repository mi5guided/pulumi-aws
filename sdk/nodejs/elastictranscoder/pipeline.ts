// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an Elastic Transcoder pipeline resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const bar = new aws.elastictranscoder.Pipeline("bar", {
 *     contentConfig: {
 *         bucket: aws_s3_bucket_content_bucket.bucket,
 *         storageClass: "Standard",
 *     },
 *     inputBucket: aws_s3_bucket_input_bucket.bucket,
 *     role: aws_iam_role_test_role.arn,
 *     thumbnailConfig: {
 *         bucket: aws_s3_bucket_thumb_bucket.bucket,
 *         storageClass: "Standard",
 *     },
 * });
 * ```
 */
export class Pipeline extends pulumi.CustomResource {
    /**
     * Get an existing Pipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PipelineState, opts?: pulumi.CustomResourceOptions): Pipeline {
        return new Pipeline(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.
     */
    public readonly awsKmsKeyArn: pulumi.Output<string | undefined>;
    /**
     * The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below)
     */
    public readonly contentConfig: pulumi.Output<{ bucket: string, storageClass?: string }>;
    /**
     * The permissions for the `content_config` object. (documented below)
     */
    public readonly contentConfigPermissions: pulumi.Output<{ accesses?: string[], grantee?: string, granteeType?: string }[] | undefined>;
    /**
     * The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
     */
    public readonly inputBucket: pulumi.Output<string>;
    /**
     * The name of the pipeline. Maximum 40 characters
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below)
     */
    public readonly notifications: pulumi.Output<{ completed?: string, error?: string, progressing?: string, warning?: string } | undefined>;
    /**
     * The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files.
     */
    public readonly outputBucket: pulumi.Output<string>;
    /**
     * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
     */
    public readonly role: pulumi.Output<string>;
    /**
     * The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below)
     */
    public readonly thumbnailConfig: pulumi.Output<{ bucket: string, storageClass?: string }>;
    /**
     * The permissions for the `thumbnail_config` object. (documented below)
     */
    public readonly thumbnailConfigPermissions: pulumi.Output<{ accesses?: string[], grantee?: string, granteeType?: string }[] | undefined>;

    /**
     * Create a Pipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<PipelineArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<PipelineArgs> | pulumi.InputObject<PipelineState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PipelineState = argsOrState as PipelineState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["awsKmsKeyArn"] = state ? state.awsKmsKeyArn : undefined;
            inputs["contentConfig"] = state ? state.contentConfig : undefined;
            inputs["contentConfigPermissions"] = state ? state.contentConfigPermissions : undefined;
            inputs["inputBucket"] = state ? state.inputBucket : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notifications"] = state ? state.notifications : undefined;
            inputs["outputBucket"] = state ? state.outputBucket : undefined;
            inputs["role"] = state ? state.role : undefined;
            inputs["thumbnailConfig"] = state ? state.thumbnailConfig : undefined;
            inputs["thumbnailConfigPermissions"] = state ? state.thumbnailConfigPermissions : undefined;
        } else {
            const args = argsOrState as PipelineArgs | undefined;
            if (!args || args.inputBucket === undefined) {
                throw new Error("Missing required property 'inputBucket'");
            }
            if (!args || args.role === undefined) {
                throw new Error("Missing required property 'role'");
            }
            inputs["awsKmsKeyArn"] = args ? args.awsKmsKeyArn : undefined;
            inputs["contentConfig"] = args ? args.contentConfig : undefined;
            inputs["contentConfigPermissions"] = args ? args.contentConfigPermissions : undefined;
            inputs["inputBucket"] = args ? args.inputBucket : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notifications"] = args ? args.notifications : undefined;
            inputs["outputBucket"] = args ? args.outputBucket : undefined;
            inputs["role"] = args ? args.role : undefined;
            inputs["thumbnailConfig"] = args ? args.thumbnailConfig : undefined;
            inputs["thumbnailConfigPermissions"] = args ? args.thumbnailConfigPermissions : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:elastictranscoder/pipeline:Pipeline", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Pipeline resources.
 */
export interface PipelineState {
    readonly arn?: string;
    /**
     * The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.
     */
    readonly awsKmsKeyArn?: string;
    /**
     * The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below)
     */
    readonly contentConfig?: { bucket?: string, storageClass?: string };
    /**
     * The permissions for the `content_config` object. (documented below)
     */
    readonly contentConfigPermissions?: { accesses?: string[], grantee?: string, granteeType?: string }[];
    /**
     * The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
     */
    readonly inputBucket?: string;
    /**
     * The name of the pipeline. Maximum 40 characters
     */
    readonly name?: string;
    /**
     * The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below)
     */
    readonly notifications?: { completed?: string, error?: string, progressing?: string, warning?: string };
    /**
     * The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files.
     */
    readonly outputBucket?: string;
    /**
     * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
     */
    readonly role?: string;
    /**
     * The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below)
     */
    readonly thumbnailConfig?: { bucket?: string, storageClass?: string };
    /**
     * The permissions for the `thumbnail_config` object. (documented below)
     */
    readonly thumbnailConfigPermissions?: { accesses?: string[], grantee?: string, granteeType?: string }[];
}

/**
 * The set of arguments for constructing a Pipeline resource.
 */
export interface PipelineArgs {
    /**
     * The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.
     */
    readonly awsKmsKeyArn?: string;
    /**
     * The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below)
     */
    readonly contentConfig?: { bucket?: string, storageClass?: string };
    /**
     * The permissions for the `content_config` object. (documented below)
     */
    readonly contentConfigPermissions?: { accesses?: string[], grantee?: string, granteeType?: string }[];
    /**
     * The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
     */
    readonly inputBucket: string;
    /**
     * The name of the pipeline. Maximum 40 characters
     */
    readonly name?: string;
    /**
     * The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below)
     */
    readonly notifications?: { completed?: string, error?: string, progressing?: string, warning?: string };
    /**
     * The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files.
     */
    readonly outputBucket?: string;
    /**
     * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
     */
    readonly role: string;
    /**
     * The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below)
     */
    readonly thumbnailConfig?: { bucket?: string, storageClass?: string };
    /**
     * The permissions for the `thumbnail_config` object. (documented below)
     */
    readonly thumbnailConfigPermissions?: { accesses?: string[], grantee?: string, granteeType?: string }[];
}
