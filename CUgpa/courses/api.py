from .models import Course
from rest_framework import viewsets, permissions
from .serializers import CourseSerializer


class CourseViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CourseSerializer

    def get_queryset(self):
        return self.request.user.courses.all()

    # Allows us to save the owner associated with a course when a course is created
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    # Use this code before creating an accounts app to be
    # able to see all courses without authentication.

    # queryset = Course.objects.all()
    # permission_classes = [
    #     permissions.AllowAny
    # ]

    # serializer_class = CourseSerializer
