// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package directconnect

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Direct Connect Gateway.
type Gateway struct {
	s *pulumi.ResourceState
}

// NewGateway registers a new resource with the given unique name, arguments, and options.
func NewGateway(ctx *pulumi.Context,
	name string, args *GatewayArgs, opts ...pulumi.ResourceOpt) (*Gateway, error) {
	if args == nil || args.AmazonSideAsn == nil {
		return nil, errors.New("missing required argument 'AmazonSideAsn'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["amazonSideAsn"] = nil
		inputs["name"] = nil
	} else {
		inputs["amazonSideAsn"] = args.AmazonSideAsn
		inputs["name"] = args.Name
	}
	s, err := ctx.RegisterResource("aws:directconnect/gateway:Gateway", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Gateway{s: s}, nil
}

// GetGateway gets an existing Gateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGateway(ctx *pulumi.Context,
	name string, id pulumi.ID, state *GatewayState, opts ...pulumi.ResourceOpt) (*Gateway, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["amazonSideAsn"] = state.AmazonSideAsn
		inputs["name"] = state.Name
	}
	s, err := ctx.ReadResource("aws:directconnect/gateway:Gateway", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Gateway{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Gateway) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Gateway) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ASN to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294.
func (r *Gateway) AmazonSideAsn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["amazonSideAsn"])
}

// The name of the connection.
func (r *Gateway) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Input properties used for looking up and filtering Gateway resources.
type GatewayState struct {
	// The ASN to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294.
	AmazonSideAsn interface{}
	// The name of the connection.
	Name interface{}
}

// The set of arguments for constructing a Gateway resource.
type GatewayArgs struct {
	// The ASN to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294.
	AmazonSideAsn interface{}
	// The name of the connection.
	Name interface{}
}
