export class Data {
  channel: {
    id: number,
    name: String,
    description: String,
    latitude: String,
    longitude: String,
    field1: String,
    created_at: Date,
    updated_at: Date,
    last_entry_id: number
  };
  feeds: {
    created_at: Date,
    entry_id: number,
    field1: String
  };
}
