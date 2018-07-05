# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class HostedPublicVirtualInterface(pulumi.CustomResource):
    """
    Provides a Direct Connect hosted public virtual interface resource. This resource represents the allocator's side of the hosted virtual interface.
    A hosted virtual interface is a virtual interface that is owned by another AWS account.
    """
    def __init__(__self__, __name__, __opts__=None, address_family=None, amazon_address=None, bgp_asn=None, bgp_auth_key=None, connection_id=None, customer_address=None, name=None, owner_account_id=None, route_filter_prefixes=None, vlan=None):
        """Create a HostedPublicVirtualInterface resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not address_family:
            raise TypeError('Missing required property address_family')
        elif not isinstance(address_family, basestring):
            raise TypeError('Expected property address_family to be a basestring')
        __self__.address_family = address_family
        """
        The address family for the BGP peer. `ipv4 ` or `ipv6`.
        """
        __props__['addressFamily'] = address_family

        if amazon_address and not isinstance(amazon_address, basestring):
            raise TypeError('Expected property amazon_address to be a basestring')
        __self__.amazon_address = amazon_address
        """
        The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
        """
        __props__['amazonAddress'] = amazon_address

        if not bgp_asn:
            raise TypeError('Missing required property bgp_asn')
        elif not isinstance(bgp_asn, int):
            raise TypeError('Expected property bgp_asn to be a int')
        __self__.bgp_asn = bgp_asn
        """
        The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
        """
        __props__['bgpAsn'] = bgp_asn

        if bgp_auth_key and not isinstance(bgp_auth_key, basestring):
            raise TypeError('Expected property bgp_auth_key to be a basestring')
        __self__.bgp_auth_key = bgp_auth_key
        """
        The authentication key for BGP configuration.
        """
        __props__['bgpAuthKey'] = bgp_auth_key

        if not connection_id:
            raise TypeError('Missing required property connection_id')
        elif not isinstance(connection_id, basestring):
            raise TypeError('Expected property connection_id to be a basestring')
        __self__.connection_id = connection_id
        """
        The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
        """
        __props__['connectionId'] = connection_id

        if customer_address and not isinstance(customer_address, basestring):
            raise TypeError('Expected property customer_address to be a basestring')
        __self__.customer_address = customer_address
        """
        The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
        """
        __props__['customerAddress'] = customer_address

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name for the virtual interface.
        """
        __props__['name'] = name

        if not owner_account_id:
            raise TypeError('Missing required property owner_account_id')
        elif not isinstance(owner_account_id, basestring):
            raise TypeError('Expected property owner_account_id to be a basestring')
        __self__.owner_account_id = owner_account_id
        """
        The AWS account that will own the new virtual interface.
        """
        __props__['ownerAccountId'] = owner_account_id

        if not route_filter_prefixes:
            raise TypeError('Missing required property route_filter_prefixes')
        elif not isinstance(route_filter_prefixes, list):
            raise TypeError('Expected property route_filter_prefixes to be a list')
        __self__.route_filter_prefixes = route_filter_prefixes
        """
        A list of routes to be advertised to the AWS network in this region.
        """
        __props__['routeFilterPrefixes'] = route_filter_prefixes

        if not vlan:
            raise TypeError('Missing required property vlan')
        elif not isinstance(vlan, int):
            raise TypeError('Expected property vlan to be a int')
        __self__.vlan = vlan
        """
        The VLAN ID.
        """
        __props__['vlan'] = vlan

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The ARN of the virtual interface.
        """

        super(HostedPublicVirtualInterface, __self__).__init__(
            'aws:directconnect/hostedPublicVirtualInterface:HostedPublicVirtualInterface',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'addressFamily' in outs:
            self.address_family = outs['addressFamily']
        if 'amazonAddress' in outs:
            self.amazon_address = outs['amazonAddress']
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'bgpAsn' in outs:
            self.bgp_asn = outs['bgpAsn']
        if 'bgpAuthKey' in outs:
            self.bgp_auth_key = outs['bgpAuthKey']
        if 'connectionId' in outs:
            self.connection_id = outs['connectionId']
        if 'customerAddress' in outs:
            self.customer_address = outs['customerAddress']
        if 'name' in outs:
            self.name = outs['name']
        if 'ownerAccountId' in outs:
            self.owner_account_id = outs['ownerAccountId']
        if 'routeFilterPrefixes' in outs:
            self.route_filter_prefixes = outs['routeFilterPrefixes']
        if 'vlan' in outs:
            self.vlan = outs['vlan']
