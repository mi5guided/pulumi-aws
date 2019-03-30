# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ResolverRuleAssociation(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    A name for the association that you're creating between a resolver rule and a VPC.
    """
    resolver_rule_id: pulumi.Output[str]
    """
    The ID of the resolver rule that you want to associate with the VPC.
    """
    vpc_id: pulumi.Output[str]
    """
    The ID of the VPC that you want to associate the resolver rule with.
    """
    def __init__(__self__, resource_name, opts=None, name=None, resolver_rule_id=None, vpc_id=None, __name__=None, __opts__=None):
        """
        Provides a Route53 Resolver rule association.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: A name for the association that you're creating between a resolver rule and a VPC.
        :param pulumi.Input[str] resolver_rule_id: The ID of the resolver rule that you want to associate with the VPC.
        :param pulumi.Input[str] vpc_id: The ID of the VPC that you want to associate the resolver rule with.
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

        __props__['name'] = name

        if resolver_rule_id is None:
            raise TypeError('Missing required property resolver_rule_id')
        __props__['resolver_rule_id'] = resolver_rule_id

        if vpc_id is None:
            raise TypeError('Missing required property vpc_id')
        __props__['vpc_id'] = vpc_id

        super(ResolverRuleAssociation, __self__).__init__(
            'aws:route53/resolverRuleAssociation:ResolverRuleAssociation',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

