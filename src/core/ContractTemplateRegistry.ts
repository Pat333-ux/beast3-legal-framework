export type TemplateCategory = "DAO Resolution" | "Service Agreement" | "Token Issuance" | "Judicial Compliance";

export interface LegalTemplate {
  id: string;
  title: string;
  category: TemplateCategory;
  version: string;
  contentMarkdown: string;
  lastUpdated: string;
}

export class ContractTemplateRegistry {
  private templates: Map<string, LegalTemplate> = new Map();

  /**
   * Add or update a legal contract template.
   */
  saveTemplate(
    title: string,
    category: TemplateCategory,
    version: string,
    contentMarkdown: string
  ): LegalTemplate {
    const template: LegalTemplate = {
      id: crypto.randomUUID(),
      title,
      category,
      version,
      contentMarkdown,
      lastUpdated: new Date().toISOString(),
    };

    this.templates.set(template.id, template);
    return template;
  }

  /**
   * Retrieve a template by ID.
   */
  getTemplate(id: string): LegalTemplate | undefined {
    return this.templates.get(id);
  }

  /**
   * List all templates filtered by category.
   */
  getByCategory(category: TemplateCategory): LegalTemplate[] {
    return Array.from(this.templates.values()).filter((t) => t.category === category);
  }

  /**
   * List all registered legal templates.
   */
  getAllTemplates(): LegalTemplate[] {
    return Array.from(this.templates.values());
  }
}

export const contractTemplateRegistry = new ContractTemplateRegistry();
