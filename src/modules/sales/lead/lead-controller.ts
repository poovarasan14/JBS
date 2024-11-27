// src/components/Lead/leadController.ts
export const fetchLeads = async () => {
    try {
        const response = await fetch('/api/leads');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching leads:", error);
    }
};
