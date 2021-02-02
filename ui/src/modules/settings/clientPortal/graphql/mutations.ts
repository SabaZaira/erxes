const createOrUpdateConfig = `
  mutation configUpdateClientPortal(
    $_id: String
    $name: String
    $description: String
    $logo: String
    $icon: String
    $url: String
    $domain: String
    $knowledgeBaseLabel: String
    $knowledgeBaseTopicId: String
    $ticketLabel: String
    $taskLabel: String
    $taskStageId: String
    $taskPipelineId: String
    $taskBoardId: String
    $ticketStageId: String
    $ticketPipelineId: String
    $ticketBoardId: String
  ) {
    configUpdateClientPortal(
      _id: $_id,
      name: $name,
      description: $description,
      url: $url,
      logo: $logo,
      icon: $icon,
      domain: $domain,
      knowledgeBaseLabel: $knowledgeBaseLabel,
      knowledgeBaseTopicId: $knowledgeBaseTopicId,
      ticketLabel: $ticketLabel,
      taskLabel: $taskLabel,
      taskStageId: $taskStageId,
      taskPipelineId: $taskPipelineId,
      taskBoardId: $taskBoardId,
      ticketStageId: $ticketStageId,
      ticketPipelineId: $ticketPipelineId,
      ticketBoardId: $ticketBoardId
    )
  }
`;

export default { createOrUpdateConfig };
