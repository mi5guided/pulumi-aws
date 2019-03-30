# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class MaintenanceWindow(pulumi.CustomResource):
    allow_unassociated_targets: pulumi.Output[bool]
    """
    Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
    """
    cutoff: pulumi.Output[float]
    """
    The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
    """
    duration: pulumi.Output[float]
    """
    The duration of the Maintenance Window in hours.
    """
    enabled: pulumi.Output[bool]
    """
    Whether the maintenance window is enabled. Default: `true`.
    """
    end_date: pulumi.Output[str]
    """
    Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to no longer run the maintenance window.
    """
    name: pulumi.Output[str]
    """
    The name of the maintenance window.
    """
    schedule: pulumi.Output[str]
    """
    The schedule of the Maintenance Window in the form of a [cron](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-cron.html) or rate expression.
    """
    schedule_timezone: pulumi.Output[str]
    """
    Timezone for schedule in [Internet Assigned Numbers Authority (IANA) Time Zone Database format](https://www.iana.org/time-zones). For example: `America/Los_Angeles`, `etc/UTC`, or `Asia/Seoul`.
    """
    start_date: pulumi.Output[str]
    """
    Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to begin the maintenance window.
    """
    def __init__(__self__, resource_name, opts=None, allow_unassociated_targets=None, cutoff=None, duration=None, enabled=None, end_date=None, name=None, schedule=None, schedule_timezone=None, start_date=None, __name__=None, __opts__=None):
        """
        Provides an SSM Maintenance Window resource
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] allow_unassociated_targets: Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
        :param pulumi.Input[float] cutoff: The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
        :param pulumi.Input[float] duration: The duration of the Maintenance Window in hours.
        :param pulumi.Input[bool] enabled: Whether the maintenance window is enabled. Default: `true`.
        :param pulumi.Input[str] end_date: Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to no longer run the maintenance window.
        :param pulumi.Input[str] name: The name of the maintenance window.
        :param pulumi.Input[str] schedule: The schedule of the Maintenance Window in the form of a [cron](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-cron.html) or rate expression.
        :param pulumi.Input[str] schedule_timezone: Timezone for schedule in [Internet Assigned Numbers Authority (IANA) Time Zone Database format](https://www.iana.org/time-zones). For example: `America/Los_Angeles`, `etc/UTC`, or `Asia/Seoul`.
        :param pulumi.Input[str] start_date: Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to begin the maintenance window.
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

        __props__['allow_unassociated_targets'] = allow_unassociated_targets

        if cutoff is None:
            raise TypeError('Missing required property cutoff')
        __props__['cutoff'] = cutoff

        if duration is None:
            raise TypeError('Missing required property duration')
        __props__['duration'] = duration

        __props__['enabled'] = enabled

        __props__['end_date'] = end_date

        __props__['name'] = name

        if schedule is None:
            raise TypeError('Missing required property schedule')
        __props__['schedule'] = schedule

        __props__['schedule_timezone'] = schedule_timezone

        __props__['start_date'] = start_date

        super(MaintenanceWindow, __self__).__init__(
            'aws:ssm/maintenanceWindow:MaintenanceWindow',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

