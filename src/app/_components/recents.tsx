import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Activity {
  id: string;
  name: string;
  start_date: string;
  moving_time: number;
  distance: number;
  type: string;
}

export default function Recents({ activities }: { activities: any }) {
  return (
    <div>
      <h2 className="pb-2">Latest Activities</h2>
      {activities.map((activity: Activity) => (
        <div key={activity.id} className="py-2">
          <Separator />
          <h3 className="font-semibold pt-2">{activity.name}</h3>

          <p className="text-xs font-mono pb-2">
            {new Date(activity.start_date).toLocaleDateString()}
          </p>
          <p>
            {Math.floor(activity.moving_time / 60) >= 60
              ? `${Math.floor(activity.moving_time / 3600)}h ${Math.floor((activity.moving_time % 3600) / 60)}m`
              : `${Math.floor(activity.moving_time / 60)}m`}{" "}
            |{" "}
            {activity.distance === 0
              ? "Whoop strap auto upload"
              : `${(activity.distance / 1609.34).toFixed(2)} miles`}
          </p>
          <Badge variant="acid">
            {activity.type === "WeightTraining"
              ? "Weight Training"
              : activity.type}
          </Badge>
        </div>
      ))}
    </div>
  );
}
