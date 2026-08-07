import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "pilotaibuild" });

export type SourceCreatedEvent = {
    name : "source/created";
    data: {
        sourceId : string;
        workspaceId: string;
    };
};


export type InngestEvents = SourceCreatedEvent;
// Create an empty array where we'll export future Inngest functions
