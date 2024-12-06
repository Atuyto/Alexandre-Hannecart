import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const isYoutubeUrl = (url: string): boolean => {
    return url.includes("youtube.com") || url.includes("youtu.be");
};

const getYoutubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
};

const renderCarouselItem = (item: string) => {
    console.log("Rendering carousel item:", item);

    if (isYoutubeUrl(item)) {
        const videoId = getYoutubeVideoId(item);
        return (
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        );
    } else {
        return (
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-secondary/30 group">
                <img
                    src={item}
                    alt="Project media"
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
        );
    }
};

function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    if (!project) {
        navigate("/", { replace: true });
        return null;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 py-24 mt-16">
            <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {project.name}
            </h1>

            <div className="max-w-4xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 glass-card p-4 rounded-xl">
                        {project.carouselImages && project.carouselImages.length > 0 &&
                            renderCarouselItem(project.carouselImages[0])}
                    </div>
                    <div className="w-full md:w-1/2 glass-card p-6 rounded-xl">
                        <p className="text-lg leading-relaxed">{project.Description}</p>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 glass-card p-6 rounded-xl">
                        <p className="text-lg leading-relaxed">
                            <span className="font-semibold text-primary">Objectif: </span>
                            {project.objective}
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            {project.details}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 glass-card p-4 rounded-xl">
                        {project.carouselImages && project.carouselImages.length > 1 &&
                            renderCarouselItem(project.carouselImages[1])}
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-primary">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.carouselImages && project.carouselImages.map((item: string, index: number) => (
                            <div key={index} className="glass-card p-4 rounded-xl">
                                {renderCarouselItem(item)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center pt-8">
                    {project.DesignBy !== "" && (
                        <a href={project.DesignByURL}>{project.DesignBy}</a>
                    )}
                </div>
                <div className="text-center pt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;