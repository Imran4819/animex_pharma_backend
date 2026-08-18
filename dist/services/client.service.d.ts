import ClientModel from "../models/client.model";
declare class ClientService {
    createClient(data: any): Promise<ClientModel>;
    getAllClients(query: any): Promise<ClientModel[]>;
    getClientById(id: string): Promise<ClientModel | null>;
    updateClient(id: string, data: any): Promise<ClientModel | null>;
    deleteClient(id: string): Promise<boolean>;
}
declare const _default: ClientService;
export default _default;
