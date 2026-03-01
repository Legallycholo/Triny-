# GitHub Issues & Milestones Guide for AI Agents

**Target Repository:** `Legallycholo/Triny-`

## 🎯 Objective
This project relies on strict task tracking via GitHub Issues and Milestones. As an AI developer agent, you are responsible for maintaining a clean and accurate project board by tracking your work directly in the GitHub repository.

---

## 🚀 Activation Prompt
*When starting a new session or chat, the user will refer to this guide. You must adopt the following instructions as core constraints for the duration of the session:*

> **"I acknowledge the `GITHUB_ISSUES_GUIDE.md`. I will use the `github-mcp-server` tools to search, read, create, and update issues and milestones for all tasks performed in this session."**

---

## 🛠️ The Workflow

For **every** task, feature, or bug fix requested by the user, you MUST follow this sequence before writing any code:

### 1. 🔍 Search & Validate
Before creating a new issue, check if one already exists:
- Use `mcp_github-mcp-server_search_issues` to search for related keywords.
- Use `mcp_github-mcp-server_list_issues` to review open issues.
- If an issue exists, read its details using `mcp_github-mcp-server_issue_read`. **Do not duplicate issues.**

### 2. 📝 Create Issues (If none exists)
If the task is not tracked, create an issue using `mcp_github-mcp-server_issue_write` (method: `'create'`):
- **Title:** Keep it concise and action-oriented (e.g., `Feature: Add user authentication module`, `Bug: Fix parallax background overflow`).
- **Body:** Provide a clear description. Include:
  - **Goal:** What needs to be achieved.
  - **Tasks:** A checklist `- [ ]` of concrete steps.
  - **Context:** Any relevant constraints or files involved.
- **Labels:** If the repository has labels configured, apply them (e.g., `bug`, `enhancement`, `documentation`).
- **Milestone:** If the user specifies a milestone, assign it. *(Note: The MCP currently associates milestones via their ID).*

### 3. 💬 Communicate Progress
Keep the issue updated as you work:
- Use `mcp_github-mcp-server_add_issue_comment` to add brief progress updates, especially if a task spans multiple messages or requires a pivot in approach.
- If you push commits or open a Pull Request, explicitly state the associated issue number (e.g., `Closes #12`).

### 4. ✅ Close and Complete
Once the task is verified and complete:
- Use `mcp_github-mcp-server_issue_write` (method: `'update'`) to change the state to `'closed'` (and state_reason to `'completed'`).
- If a pull request was merged that handles the fix, ensure the issue reflects this resolution.

---

## 📌 Best Practices for AI Agents

* **Be Proactive:** If the user asks for a large feature, break it down into smaller, manageable sub-issues or tasks within a main tracking issue.
* **Keep Descriptions Clean:** Use Markdown extensively in issue bodies. Code snippets, file paths, and bulleted lists make tracking easier for human review.
* **Never Guess Issue Numbers:** Always retrieve the active issue number via search or list tools before attempting to update or comment on it.
* **Sync with Milestones:** If a task relates to a broader phase (e.g., `v1.0 Launch`), ensure the issue is grouped appropriately so the user can track high-level progress.

---

*This guide ensures the `Triny-` project stays highly organized. Adherence to these steps is mandatory for all agentic workflows.*
