import { useEffect, useState } from "react";
import { $host } from "../../../http";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    const [deadline, setDeadline] = useState(Date.now());

    useEffect(() => {
        const asyncFunc = async () => {
            const res = await $host.get("get_tasks");

            setTasks(res.data);
        };

        asyncFunc();
    }, []);

    const addTask = async () => {
        setTasks((prev) => [
            ...prev,
            { title: text, deadline: deadline, is_completed: false },
        ]);

        const res = await $host.post("create_task", {
            title: text,
            deadline: deadline,
        });
    };

    const change = async (ind) => {
        setTasks((prev) =>
            prev.map((i, index) =>
                ind === index ? { ...i, is_completed: !i.is_completed } : i,
            ),
        );

        const res = await $host.post("update_task", {
            task_ind: ind,
        });
    };

    return (
        <div className="tasks">
            <div className="tasks__add">
                <input
                    value={text}
                    onInput={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Название задания"
                />
                <input
                    value={new Date(deadline).toISOString().slice(0, 10)}
                    onInput={(e) => setDeadline(e.target.valueAsNumber)}
                    type="date"
                    placeholder="Дедлайн"
                />
                <button onClick={() => addTask()}>Добавить</button>
            </div>
            <div className="tasks__list">
                {tasks.map((i, ind) => (
                    <div key={ind} className="tasks__item">
                        {ind + 1}. {i.title}. Сделать до:{" "}
                        {new Date(i.deadline).toLocaleString()}
                        <input
                            type="checkbox"
                            checked={i.is_completed}
                            onChange={() => change(ind)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
