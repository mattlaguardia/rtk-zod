/*
 * NOTE: we'd need a general model to extend from
 * this way we'd have the correct looking JSON API spec'd object
 */

interface IModel {
  id: string;
  type: string;
}

interface ISourceCapabilities {
  multiframe?: boolean;
  video?: boolean;
}

interface ISource extends IModel {
  account_id: string;
  // ...
  date_created: number;
  // ...
  capabilities: ISourceCapabilities;
}

class Model {
  id: string;
  type: string;

  constructor({ id, type }: { id: string, type: string }) {
    this.id = id;
    this.type = type;
  }
}

class Source extends Model {
  account_id: string;
  date_created: number;
  capabilities: ISourceCapabilities;

  constructor({ id, account_id, date_created, capabilities, type }: ISource) {
    super({ id, type });

    this.account_id = account_id;
    this.date_created = date_created;
    this.capabilities = capabilities;
  }

  dateCreated() {
    return new Date(this.date_created * 1000);
  }

  hasVideo() {
    return !!this.capabilities.video;
  }
}

export default Source;
