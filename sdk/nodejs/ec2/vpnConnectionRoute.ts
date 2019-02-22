// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a static route between a VPN connection and a customer gateway.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const customerGateway = new aws.ec2.CustomerGateway("customer_gateway", {
 *     bgpAsn: 65000,
 *     ipAddress: "172.0.0.1",
 *     type: "ipsec.1",
 * });
 * const vpc = new aws.ec2.Vpc("vpc", {
 *     cidrBlock: "10.0.0.0/16",
 * });
 * const vpnGateway = new aws.ec2.VpnGateway("vpn_gateway", {
 *     vpcId: vpc.id,
 * });
 * const main = new aws.ec2.VpnConnection("main", {
 *     customerGatewayId: customerGateway.id,
 *     staticRoutesOnly: true,
 *     type: "ipsec.1",
 *     vpnGatewayId: vpnGateway.id,
 * });
 * const office = new aws.ec2.VpnConnectionRoute("office", {
 *     destinationCidrBlock: "192.168.10.0/24",
 *     vpnConnectionId: main.id,
 * });
 * ```
 */
export class VpnConnectionRoute extends pulumi.CustomResource {
    /**
     * Get an existing VpnConnectionRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnConnectionRouteState, opts?: pulumi.CustomResourceOptions): VpnConnectionRoute {
        return new VpnConnectionRoute(name, <any>state, { ...opts, id: id });
    }

    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    public readonly destinationCidrBlock: pulumi.Output<string>;
    /**
     * The ID of the VPN connection.
     */
    public readonly vpnConnectionId: pulumi.Output<string>;

    /**
     * Create a VpnConnectionRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<VpnConnectionRouteArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<VpnConnectionRouteArgs> | pulumi.InputObject<VpnConnectionRouteState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: VpnConnectionRouteState = argsOrState as VpnConnectionRouteState | undefined;
            inputs["destinationCidrBlock"] = state ? state.destinationCidrBlock : undefined;
            inputs["vpnConnectionId"] = state ? state.vpnConnectionId : undefined;
        } else {
            const args = argsOrState as VpnConnectionRouteArgs | undefined;
            if (!args || args.destinationCidrBlock === undefined) {
                throw new Error("Missing required property 'destinationCidrBlock'");
            }
            if (!args || args.vpnConnectionId === undefined) {
                throw new Error("Missing required property 'vpnConnectionId'");
            }
            inputs["destinationCidrBlock"] = args ? args.destinationCidrBlock : undefined;
            inputs["vpnConnectionId"] = args ? args.vpnConnectionId : undefined;
        }
        super("aws:ec2/vpnConnectionRoute:VpnConnectionRoute", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VpnConnectionRoute resources.
 */
export interface VpnConnectionRouteState {
    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    readonly destinationCidrBlock?: string;
    /**
     * The ID of the VPN connection.
     */
    readonly vpnConnectionId?: string;
}

/**
 * The set of arguments for constructing a VpnConnectionRoute resource.
 */
export interface VpnConnectionRouteArgs {
    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    readonly destinationCidrBlock: string;
    /**
     * The ID of the VPN connection.
     */
    readonly vpnConnectionId: string;
}
