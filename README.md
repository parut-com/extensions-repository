# Parut Extensions Repository

This is the official and default repository for Parut extensions.

## Schema

| key                   | type    | required | description                              |
|-----------------------|---------|----------|------------------------------------------|
| id                    | uuid4   | required | Unique identifier for the extension      |
| name                  | string  | required | Friendly name to identify extension      |
| description           | string  | required | A sentence to describe the extension     |
| author                | object  | required | Who manages/supports the extension       |
| author.name           | string  | required | Name of the extension owner              |
| author.email          | string  | required | Email to get infor and support           |
| author.website        | string  | required | Website to get info and support          |
| metadata              | string  | required | A url to grab metadata for the extension |

## Adding Extensions

Clone this repository, add your extension to the [extensions.yml](extensions.yml) file, then create a PR into this repository.
