import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [medium, setMedium] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Session Booked!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-sage-400">Book Your Session</h2>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Select Date</label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Communication Medium</label>
          <Select onValueChange={setMedium}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Text Chat</SelectItem>
              <SelectItem value="audio">Audio Call</SelectItem>
              <SelectItem value="video">Video Call</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Your Name</label>
          <Input placeholder="Enter your full name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Brief Description</label>
          <Textarea 
            placeholder="Tell us briefly what you'd like to discuss..."
            className="h-32"
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-sage-300 hover:bg-sage-400 text-white"
        >
          Confirm Booking
        </Button>
      </div>
    </form>
  );
};