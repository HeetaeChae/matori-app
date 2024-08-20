const dummyStories = [
  {
    id: 1,
    content: "첫 번째 스토리",
    photos: undefined,
    createdAt: new Date("2024-08-20"),
  },
  {
    id: 2,
    content: "두 번째 스토리",
    photos: ["https://picsum.photos/200/300"],
    createdAt: new Date("2024-08-21"),
  },
  {
    id: 3,
    content: "세 번째 스토리",
    photos: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    createdAt: new Date("2024-08-22"),
  },
  {
    id: 4,
    content: "네 번째 스토리",
    photos: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    createdAt: new Date("2024-08-23"),
  },
  {
    id: 5,
    content: "다섯 번째 스토리",
    photos: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    createdAt: new Date("2024-08-24"),
  },
  {
    id: 6,
    content: "여섯 번째 스토리",
    photos: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    createdAt: new Date("2024-08-25"),
  },
];

class Story {
  private static instance: Story;
  private stories: {
    id: number;
    content: string;
    photos: string[] | undefined;
    createdAt: Date;
  }[] = [...dummyStories];
  private idCounter = this.stories.length;

  private constructor() {}

  public static getInstance(): Story {
    if (!Story.instance) {
      Story.instance = new Story();
    }
    return Story.instance;
  }

  private generateId() {
    return this.idCounter++;
  }

  private findById(id: number) {
    return this.stories.find((story) => story.id === id);
  }

  public create({
    content,
    photos,
  }: {
    content: string;
    photos: string[] | undefined;
  }) {
    const story = {
      id: this.generateId(),
      content,
      photos,
      createdAt: new Date(),
    };
    this.stories.push(story);
    return { success: true, data: story };
  }

  public update({
    id,
    content,
    photos,
  }: {
    id: number;
    content: string;
    photos: string[] | undefined;
  }) {
    const story = this.findById(id);
    if (!story) {
      return;
    }
    const updatedStory = Object.assign(story, { content, photos });
    const newStories = this.stories.map((story) =>
      story.id === id ? updatedStory : story
    );
    this.stories = newStories;
    return { success: true, data: updatedStory };
  }

  public delete({ id }: { id: number }) {
    const index = this.stories.findIndex((story) => story.id === id);
    if (index === -1) {
      return;
    }
    this.stories.splice(index, 1);
    return { success: true };
  }

  public read() {
    return this.stories;
  }
}

const storyInstance = Story.getInstance();

export default storyInstance;
