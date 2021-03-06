// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package emr

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an Elastic MapReduce Cluster, a web service that makes it easy to
// process large amounts of data efficiently. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/elastic-mapreduce/)
// for more information.
// 
// To configure [Instance Groups](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for [task nodes](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-task), see the [`aws_emr_instance_group` resource](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html).
// 
// > Support for [Instance Fleets](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-fleets) will be made available in an upcoming release.
// 
// ## core_instance_group Configuration Block
// 
// Supported arguments for the `core_instance_group` configuration block:
// 
// * `instance_type` - (Required) EC2 instance type for all instances in the instance group.
// * `autoscaling_policy` - (Optional) String containing the [EMR Auto Scaling Policy](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) JSON.
// * `bid_price` - (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
// * `ebs_config` - (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
// * `instance_count` - (Optional) Target number of instances for the instance group. Must be at least 1. Defaults to 1.
// * `name` - (Optional) Friendly name given to the instance group.
// 
// ## ec2_attributes
// 
// Attributes for the Amazon EC2 instances running the job flow
// 
// * `key_name` - (Optional) Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`
// * `subnet_id` - (Optional) VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in a Amazon VPC
// * `additional_master_security_groups` - (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the master node
// * `additional_slave_security_groups` - (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string
// * `emr_managed_master_security_group` - (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the master node
// * `emr_managed_slave_security_group` - (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes
// * `service_access_security_group` - (Optional) Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet
// * `instance_profile` - (Required) Instance Profile for EC2 instances of the cluster assume this role
// 
// > **NOTE on EMR-Managed security groups:** These security groups will have any
// missing inbound or outbound access rules added and maintained by AWS, to ensure
// proper communication between instances in a cluster. The EMR service will
// maintain these rules for groups provided in `emr_managed_master_security_group`
// and `emr_managed_slave_security_group`; attempts to remove the required rules
// may succeed, only for the EMR service to re-add them in a matter of minutes.
// This may cause Terraform to fail to destroy an environment that contains an EMR
// cluster, because the EMR service does not revoke rules added on deletion,
// leaving a cyclic dependency between the security groups that prevents their
// deletion. To avoid this, use the `revoke_rules_on_delete` optional attribute for
// any Security Group used in `emr_managed_master_security_group` and
// `emr_managed_slave_security_group`. See [Amazon EMR-Managed Security
// Groups](http://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-man-sec-groups.html)
// for more information about the EMR-managed security group rules.
// 
// ## kerberos_attributes
// 
// Attributes for Kerberos configuration
// 
// * `ad_domain_join_password` - (Optional) The Active Directory password for `ad_domain_join_user`
// * `ad_domain_join_user` - (Optional) Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.
// * `cross_realm_trust_principal_password` - (Optional) Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.
// * `kdc_admin_password` - (Required) The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.
// * `realm` - (Required) The name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`
// 
// ## instance_group
// 
// Attributes for each task instance group in the cluster
// 
// * `instance_role` - (Required) The role of the instance group in the cluster. Valid values are: `MASTER`, `CORE`, and `TASK`.
// * `instance_type` - (Required) The EC2 instance type for all instances in the instance group
// * `instance_count` - (Optional) Target number of instances for the instance group
// * `name` - (Optional) Friendly name given to the instance group
// * `bid_price` - (Optional) If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
// * `ebs_config` - (Optional) A list of attributes for the EBS volumes attached to each instance in the instance group. Each `ebs_config` defined will result in additional EBS volumes being attached to _each_ instance in the instance group. Defined below
// * `autoscaling_policy` - (Optional) The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
// 
// ## master_instance_group Configuration Block
// 
// Supported nested arguments for the `master_instance_group` configuration block:
// 
// * `instance_type` - (Required) EC2 instance type for all instances in the instance group.
// * `bid_price` - (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
// * `ebs_config` - (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
// * `name` - (Optional) Friendly name given to the instance group.
// 
// ## ebs_config
// 
// Attributes for the EBS volumes attached to each EC2 instance in the `instance_group`
// 
// * `size` - (Required) The volume size, in gibibytes (GiB).
// * `type` - (Required) The volume type. Valid options are `gp2`, `io1`, `standard` and `st1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).
// * `iops` - (Optional) The number of I/O operations per second (IOPS) that the volume supports
// * `volumes_per_instance` - (Optional) The number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1)
// 
// ## bootstrap_action
// 
// * `name` - (Required) Name of the bootstrap action
// * `path` - (Required) Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system
// * `args` - (Optional) List of command line arguments to pass to the bootstrap action script
// 
// ## step
// 
// Attributes for step configuration
// 
// * `action_on_failure` - (Required) The action to take if the step fails. Valid values: `TERMINATE_JOB_FLOW`, `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE`
// * `hadoop_jar_step` - (Required) The JAR file used for the step. Defined below.
// * `name` - (Required) The name of the step.
// 
// ### hadoop_jar_step
// 
// Attributes for Hadoop job step configuration
// 
// * `args` - (Optional) List of command line arguments passed to the JAR file's main function when executed.
// * `jar` - (Required) Path to a JAR file run during the step.
// * `main_class` - (Optional) Name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
// * `properties` - (Optional) Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.
type Cluster struct {
	s *pulumi.ResourceState
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	if args == nil || args.ReleaseLabel == nil {
		return nil, errors.New("missing required argument 'ReleaseLabel'")
	}
	if args == nil || args.ServiceRole == nil {
		return nil, errors.New("missing required argument 'ServiceRole'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["additionalInfo"] = nil
		inputs["applications"] = nil
		inputs["autoscalingRole"] = nil
		inputs["bootstrapActions"] = nil
		inputs["configurations"] = nil
		inputs["configurationsJson"] = nil
		inputs["coreInstanceCount"] = nil
		inputs["coreInstanceGroup"] = nil
		inputs["coreInstanceType"] = nil
		inputs["customAmiId"] = nil
		inputs["ebsRootVolumeSize"] = nil
		inputs["ec2Attributes"] = nil
		inputs["instanceGroups"] = nil
		inputs["keepJobFlowAliveWhenNoSteps"] = nil
		inputs["kerberosAttributes"] = nil
		inputs["logUri"] = nil
		inputs["masterInstanceGroup"] = nil
		inputs["masterInstanceType"] = nil
		inputs["name"] = nil
		inputs["releaseLabel"] = nil
		inputs["scaleDownBehavior"] = nil
		inputs["securityConfiguration"] = nil
		inputs["serviceRole"] = nil
		inputs["steps"] = nil
		inputs["tags"] = nil
		inputs["terminationProtection"] = nil
		inputs["visibleToAllUsers"] = nil
	} else {
		inputs["additionalInfo"] = args.AdditionalInfo
		inputs["applications"] = args.Applications
		inputs["autoscalingRole"] = args.AutoscalingRole
		inputs["bootstrapActions"] = args.BootstrapActions
		inputs["configurations"] = args.Configurations
		inputs["configurationsJson"] = args.ConfigurationsJson
		inputs["coreInstanceCount"] = args.CoreInstanceCount
		inputs["coreInstanceGroup"] = args.CoreInstanceGroup
		inputs["coreInstanceType"] = args.CoreInstanceType
		inputs["customAmiId"] = args.CustomAmiId
		inputs["ebsRootVolumeSize"] = args.EbsRootVolumeSize
		inputs["ec2Attributes"] = args.Ec2Attributes
		inputs["instanceGroups"] = args.InstanceGroups
		inputs["keepJobFlowAliveWhenNoSteps"] = args.KeepJobFlowAliveWhenNoSteps
		inputs["kerberosAttributes"] = args.KerberosAttributes
		inputs["logUri"] = args.LogUri
		inputs["masterInstanceGroup"] = args.MasterInstanceGroup
		inputs["masterInstanceType"] = args.MasterInstanceType
		inputs["name"] = args.Name
		inputs["releaseLabel"] = args.ReleaseLabel
		inputs["scaleDownBehavior"] = args.ScaleDownBehavior
		inputs["securityConfiguration"] = args.SecurityConfiguration
		inputs["serviceRole"] = args.ServiceRole
		inputs["steps"] = args.Steps
		inputs["tags"] = args.Tags
		inputs["terminationProtection"] = args.TerminationProtection
		inputs["visibleToAllUsers"] = args.VisibleToAllUsers
	}
	inputs["clusterState"] = nil
	inputs["masterPublicDns"] = nil
	s, err := ctx.RegisterResource("aws:emr/cluster:Cluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ClusterState, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["additionalInfo"] = state.AdditionalInfo
		inputs["applications"] = state.Applications
		inputs["autoscalingRole"] = state.AutoscalingRole
		inputs["bootstrapActions"] = state.BootstrapActions
		inputs["clusterState"] = state.ClusterState
		inputs["configurations"] = state.Configurations
		inputs["configurationsJson"] = state.ConfigurationsJson
		inputs["coreInstanceCount"] = state.CoreInstanceCount
		inputs["coreInstanceGroup"] = state.CoreInstanceGroup
		inputs["coreInstanceType"] = state.CoreInstanceType
		inputs["customAmiId"] = state.CustomAmiId
		inputs["ebsRootVolumeSize"] = state.EbsRootVolumeSize
		inputs["ec2Attributes"] = state.Ec2Attributes
		inputs["instanceGroups"] = state.InstanceGroups
		inputs["keepJobFlowAliveWhenNoSteps"] = state.KeepJobFlowAliveWhenNoSteps
		inputs["kerberosAttributes"] = state.KerberosAttributes
		inputs["logUri"] = state.LogUri
		inputs["masterInstanceGroup"] = state.MasterInstanceGroup
		inputs["masterInstanceType"] = state.MasterInstanceType
		inputs["masterPublicDns"] = state.MasterPublicDns
		inputs["name"] = state.Name
		inputs["releaseLabel"] = state.ReleaseLabel
		inputs["scaleDownBehavior"] = state.ScaleDownBehavior
		inputs["securityConfiguration"] = state.SecurityConfiguration
		inputs["serviceRole"] = state.ServiceRole
		inputs["steps"] = state.Steps
		inputs["tags"] = state.Tags
		inputs["terminationProtection"] = state.TerminationProtection
		inputs["visibleToAllUsers"] = state.VisibleToAllUsers
	}
	s, err := ctx.ReadResource("aws:emr/cluster:Cluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Cluster) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Cluster) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform.
func (r *Cluster) AdditionalInfo() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["additionalInfo"])
}

// A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
func (r *Cluster) Applications() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["applications"])
}

// An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
func (r *Cluster) AutoscalingRole() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["autoscalingRole"])
}

// List of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below
func (r *Cluster) BootstrapActions() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["bootstrapActions"])
}

func (r *Cluster) ClusterState() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterState"])
}

// List of configurations supplied for the EMR cluster you are creating
func (r *Cluster) Configurations() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["configurations"])
}

// A JSON string for supplying list of configurations for the EMR cluster.
func (r *Cluster) ConfigurationsJson() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["configurationsJson"])
}

// Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
func (r *Cluster) CoreInstanceCount() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["coreInstanceCount"])
}

// Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
func (r *Cluster) CoreInstanceGroup() *pulumi.Output {
	return r.s.State["coreInstanceGroup"]
}

// Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
func (r *Cluster) CoreInstanceType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["coreInstanceType"])
}

// A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
func (r *Cluster) CustomAmiId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["customAmiId"])
}

// Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
func (r *Cluster) EbsRootVolumeSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["ebsRootVolumeSize"])
}

// Attributes for the EC2 instances running the job flow. Defined below
func (r *Cluster) Ec2Attributes() *pulumi.Output {
	return r.s.State["ec2Attributes"]
}

// Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws_emr_instance_group` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
func (r *Cluster) InstanceGroups() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["instanceGroups"])
}

// Switch on/off run cluster with no steps or when all steps are complete (default is on)
func (r *Cluster) KeepJobFlowAliveWhenNoSteps() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["keepJobFlowAliveWhenNoSteps"])
}

// Kerberos configuration for the cluster. Defined below
func (r *Cluster) KerberosAttributes() *pulumi.Output {
	return r.s.State["kerberosAttributes"]
}

// S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
func (r *Cluster) LogUri() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["logUri"])
}

// Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
func (r *Cluster) MasterInstanceGroup() *pulumi.Output {
	return r.s.State["masterInstanceGroup"]
}

// Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
func (r *Cluster) MasterInstanceType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["masterInstanceType"])
}

// The public DNS name of the master EC2 instance.
// * `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
func (r *Cluster) MasterPublicDns() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["masterPublicDns"])
}

// The name of the job flow
func (r *Cluster) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The release label for the Amazon EMR release
func (r *Cluster) ReleaseLabel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["releaseLabel"])
}

// The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
func (r *Cluster) ScaleDownBehavior() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["scaleDownBehavior"])
}

// The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
func (r *Cluster) SecurityConfiguration() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["securityConfiguration"])
}

// IAM role that will be assumed by the Amazon EMR service to access AWS resources
func (r *Cluster) ServiceRole() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["serviceRole"])
}

// List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize the [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other steps are being managed outside of Terraform. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
func (r *Cluster) Steps() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["steps"])
}

// list of tags to apply to the EMR Cluster
func (r *Cluster) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Switch on/off termination protection (default is off)
func (r *Cluster) TerminationProtection() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["terminationProtection"])
}

// Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
func (r *Cluster) VisibleToAllUsers() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["visibleToAllUsers"])
}

// Input properties used for looking up and filtering Cluster resources.
type ClusterState struct {
	// A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform.
	AdditionalInfo interface{}
	// A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
	Applications interface{}
	// An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
	AutoscalingRole interface{}
	// List of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below
	BootstrapActions interface{}
	ClusterState interface{}
	// List of configurations supplied for the EMR cluster you are creating
	Configurations interface{}
	// A JSON string for supplying list of configurations for the EMR cluster.
	ConfigurationsJson interface{}
	// Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
	CoreInstanceCount interface{}
	// Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
	CoreInstanceGroup interface{}
	// Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
	CoreInstanceType interface{}
	// A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
	CustomAmiId interface{}
	// Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
	EbsRootVolumeSize interface{}
	// Attributes for the EC2 instances running the job flow. Defined below
	Ec2Attributes interface{}
	// Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws_emr_instance_group` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
	InstanceGroups interface{}
	// Switch on/off run cluster with no steps or when all steps are complete (default is on)
	KeepJobFlowAliveWhenNoSteps interface{}
	// Kerberos configuration for the cluster. Defined below
	KerberosAttributes interface{}
	// S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
	LogUri interface{}
	// Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
	MasterInstanceGroup interface{}
	// Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
	MasterInstanceType interface{}
	// The public DNS name of the master EC2 instance.
	// * `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
	MasterPublicDns interface{}
	// The name of the job flow
	Name interface{}
	// The release label for the Amazon EMR release
	ReleaseLabel interface{}
	// The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
	ScaleDownBehavior interface{}
	// The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
	SecurityConfiguration interface{}
	// IAM role that will be assumed by the Amazon EMR service to access AWS resources
	ServiceRole interface{}
	// List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize the [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other steps are being managed outside of Terraform. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
	Steps interface{}
	// list of tags to apply to the EMR Cluster
	Tags interface{}
	// Switch on/off termination protection (default is off)
	TerminationProtection interface{}
	// Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
	VisibleToAllUsers interface{}
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform.
	AdditionalInfo interface{}
	// A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
	Applications interface{}
	// An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
	AutoscalingRole interface{}
	// List of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below
	BootstrapActions interface{}
	// List of configurations supplied for the EMR cluster you are creating
	Configurations interface{}
	// A JSON string for supplying list of configurations for the EMR cluster.
	ConfigurationsJson interface{}
	// Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
	CoreInstanceCount interface{}
	// Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
	CoreInstanceGroup interface{}
	// Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
	CoreInstanceType interface{}
	// A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
	CustomAmiId interface{}
	// Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
	EbsRootVolumeSize interface{}
	// Attributes for the EC2 instances running the job flow. Defined below
	Ec2Attributes interface{}
	// Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws_emr_instance_group` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
	InstanceGroups interface{}
	// Switch on/off run cluster with no steps or when all steps are complete (default is on)
	KeepJobFlowAliveWhenNoSteps interface{}
	// Kerberos configuration for the cluster. Defined below
	KerberosAttributes interface{}
	// S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
	LogUri interface{}
	// Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
	MasterInstanceGroup interface{}
	// Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
	MasterInstanceType interface{}
	// The name of the job flow
	Name interface{}
	// The release label for the Amazon EMR release
	ReleaseLabel interface{}
	// The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
	ScaleDownBehavior interface{}
	// The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
	SecurityConfiguration interface{}
	// IAM role that will be assumed by the Amazon EMR service to access AWS resources
	ServiceRole interface{}
	// List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize the [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other steps are being managed outside of Terraform. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
	Steps interface{}
	// list of tags to apply to the EMR Cluster
	Tags interface{}
	// Switch on/off termination protection (default is off)
	TerminationProtection interface{}
	// Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
	VisibleToAllUsers interface{}
}
