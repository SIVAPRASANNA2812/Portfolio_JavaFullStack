package com.portfolio.model;

import java.util.List;

public class Project {

    private String id;
    private String title;
    private String tagline;
    private String category;
    private String categoryLabel;
    private String summary;
    private List<String> techStack;
    private String githubUrl;
    private String liveDemoUrl;
    private List<String> highlights;

    public Project() {
    }

    public Project(String id, String title, String tagline, String category, String categoryLabel,
                   String summary, List<String> techStack, String githubUrl, String liveDemoUrl,
                   List<String> highlights) {
        this.id = id;
        this.title = title;
        this.tagline = tagline;
        this.category = category;
        this.categoryLabel = categoryLabel;
        this.summary = summary;
        this.techStack = techStack;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
        this.highlights = highlights;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategoryLabel() {
        return categoryLabel;
    }

    public void setCategoryLabel(String categoryLabel) {
        this.categoryLabel = categoryLabel;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public List<String> getTechStack() {
        return techStack;
    }

    public void setTechStack(List<String> techStack) {
        this.techStack = techStack;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLiveDemoUrl() {
        return liveDemoUrl;
    }

    public void setLiveDemoUrl(String liveDemoUrl) {
        this.liveDemoUrl = liveDemoUrl;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }
}
