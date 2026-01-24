// src/components/work/ServerProjects.tsx
import { Projects } from "./Projects";

interface ServerProjectsProps {
    range?: [number, number?];
    exclude?: string[];
}

export default function ServerProjects(props: ServerProjectsProps) {
    return <Projects {...props} />;
}