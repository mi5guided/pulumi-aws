// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an Gamelift Build resource.
 */
export class Build extends pulumi.CustomResource {
    /**
     * Get an existing Build resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BuildState, opts?: pulumi.CustomResourceOptions): Build {
        return new Build(name, <any>state, { ...opts, id: id });
    }

    /**
     * Name of the build
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Operating system that the game server binaries are built to run on. e.g. `WINDOWS_2012` or `AMAZON_LINUX`.
     */
    public readonly operatingSystem: pulumi.Output<string>;
    /**
     * Information indicating where your game build files are stored. See below.
     */
    public readonly storageLocation: pulumi.Output<{ bucket: string, key: string, roleArn: string }>;
    /**
     * Version that is associated with this build.
     */
    public readonly version: pulumi.Output<string | undefined>;

    /**
     * Create a Build resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<BuildArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<BuildArgs> | pulumi.InputObject<BuildState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: BuildState = argsOrState as BuildState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            inputs["storageLocation"] = state ? state.storageLocation : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as BuildArgs | undefined;
            if (!args || args.operatingSystem === undefined) {
                throw new Error("Missing required property 'operatingSystem'");
            }
            if (!args || args.storageLocation === undefined) {
                throw new Error("Missing required property 'storageLocation'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            inputs["storageLocation"] = args ? args.storageLocation : undefined;
            inputs["version"] = args ? args.version : undefined;
        }
        super("aws:gamelift/build:Build", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Build resources.
 */
export interface BuildState {
    /**
     * Name of the build
     */
    readonly name?: string;
    /**
     * Operating system that the game server binaries are built to run on. e.g. `WINDOWS_2012` or `AMAZON_LINUX`.
     */
    readonly operatingSystem?: string;
    /**
     * Information indicating where your game build files are stored. See below.
     */
    readonly storageLocation?: { bucket: string, key: string, roleArn: string };
    /**
     * Version that is associated with this build.
     */
    readonly version?: string;
}

/**
 * The set of arguments for constructing a Build resource.
 */
export interface BuildArgs {
    /**
     * Name of the build
     */
    readonly name?: string;
    /**
     * Operating system that the game server binaries are built to run on. e.g. `WINDOWS_2012` or `AMAZON_LINUX`.
     */
    readonly operatingSystem: string;
    /**
     * Information indicating where your game build files are stored. See below.
     */
    readonly storageLocation: { bucket: string, key: string, roleArn: string };
    /**
     * Version that is associated with this build.
     */
    readonly version?: string;
}
