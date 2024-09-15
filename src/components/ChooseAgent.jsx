import { useEffect, useState } from "react";
import { fetchAgents } from "../utils/api";
function ChooseAgent({ value, onChange }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAgents();
      setAgents(data);
    };
    fetch();
  }, []);

  const handleAgentChange = (e) => {
    const newAgent = e.target.value;
    onChange(newAgent);
  };

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>აგენტი</span>
      <div style={{ marginTop: "1.375rem" }}>
        <label htmlFor="agent_id">აირჩიე</label>
        <select
          required
          value={value.agent_id}
          onChange={handleAgentChange}
          id="agent"
          style={{
            width: "50%",
            border: "1px solid #808A93",
            borderRadius: "6px",
            outline: "none",
            padding: "10px 12.5px",
            display: "block",
          }}
        >
          <option value=""></option>
          {agents.map((agent) => (
            <option key={agent.id} value={agent.id}>
              {agent.name} {agent.surname}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ChooseAgent;
