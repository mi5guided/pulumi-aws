# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class NetworkAssociation(pulumi.CustomResource):
    client_vpn_endpoint_id: pulumi.Output[str]
    """
    The ID of the Client VPN endpoint.
    """
    security_groups: pulumi.Output[list]
    """
    The IDs of the security groups applied to the target network association.
    """
    status: pulumi.Output[str]
    """
    The current state of the target network association.
    """
    subnet_id: pulumi.Output[str]
    """
    The ID of the subnet to associate with the Client VPN endpoint.
    """
    vpc_id: pulumi.Output[str]
    """
    The ID of the VPC in which the target network (subnet) is located. 
    """
    def __init__(__self__, resource_name, opts=None, client_vpn_endpoint_id=None, subnet_id=None, __name__=None, __opts__=None):
        """
        Provides network associations for AWS Client VPN endpoints. For more information on usage, please see the 
        [AWS Client VPN Administrator's Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] client_vpn_endpoint_id: The ID of the Client VPN endpoint.
        :param pulumi.Input[str] subnet_id: The ID of the subnet to associate with the Client VPN endpoint.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if client_vpn_endpoint_id is None:
            raise TypeError('Missing required property client_vpn_endpoint_id')
        __props__['client_vpn_endpoint_id'] = client_vpn_endpoint_id

        if subnet_id is None:
            raise TypeError('Missing required property subnet_id')
        __props__['subnet_id'] = subnet_id

        __props__['security_groups'] = None
        __props__['status'] = None
        __props__['vpc_id'] = None

        super(NetworkAssociation, __self__).__init__(
            'aws:ec2clientvpn/networkAssociation:NetworkAssociation',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

