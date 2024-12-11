# 1.5.12 Release 🎉

{% note noteType="Tip" %}
**Nov 26th, 2024**
{% /note %}

{% inlineCalloutContainer %}
{% inlineCallout
color="violet-70"
icon="celebration"
bold="Upgrade OpenMetadata"
href="/deployment/upgrade" %}
Learn how to upgrade your OpenMetadata instance to 1.5.12!
{% /inlineCallout %}
{% /inlineCalloutContainer %}

You can find the GitHub release [here](https://github.com/open-metadata/OpenMetadata/releases/tag/1.5.12-release).

# What's Changed

- Improvement: Added async apis for csv import.
- Improvement: Skip domain check for bots and admin
- Improvement: MYSQL lineage and usage.
- Minor: Added Lineage Field back to SearchLineage.
- Fix: Database is missing from the search dropdown
- Fix: Bad Representation of owners.
- Fix: The Daily Active Users Summary Card in Data Insights.
- Fix: The processing of URL Encoded Assets in Data Insights.
- Fix: Column Level Lineage export.
- Fix: Store procedure yielding by adding Try/Except.
- Fix: Lineage export when there is no column / pipeline edge.

**Full Changelog**: https://github.com/open-metadata/OpenMetadata/compare/1.5.11-release...1.5.12-release